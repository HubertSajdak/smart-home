import { useUpdateDeviceRoomAssignment } from '@smart-home/device/data-access-device-list';
import { IRoomsList, useGetRooms } from '@smart-home/device/data-access-room-list';
import { Select, Typography } from '@smart-home/shared/design-system';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React, { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { StyledDividerDiv, StyledRoomAssignmentSection } from './room-assignment-section.styled';

export const RoomAssignmentSection = () => {
  const { selectedDeviceRoomAssignmentId, selectedDeviceId } = useDeviceSettingsStore();
  const { mutate: deviceRoomAssignmentMutation } = useUpdateDeviceRoomAssignment();
  const [roomAssignmentId, setRoomAssignmentId] = useState<number | null>(null);
  const { data: rooms } = useGetRooms();
  const mapRooms =
    rooms &&
    rooms.map((room) => {
      return {
        value: room.id,
        label: room.label,
      };
    });

  const getCurrentRoomName = (currentRoomId: number, rooms: IRoomsList[]) => {
    return rooms.find((room) => currentRoomId === room.id)?.label;
  };

  const handleRoomAssignmentChange = useCallback((value: number) => {
    setRoomAssignmentId(value);
  }, []);

  const updateDeviceRoomAssignment = useDebouncedCallback((deviceId, roomId: number) => {
    deviceRoomAssignmentMutation({ deviceId, roomAssignmentId: roomId });
  }, 300);

  useEffect(() => {
    setRoomAssignmentId(selectedDeviceRoomAssignmentId);
  }, [selectedDeviceRoomAssignmentId]);

  useEffect(() => {
    if (!roomAssignmentId) return;
    updateDeviceRoomAssignment(selectedDeviceId, roomAssignmentId);
  }, [roomAssignmentId, selectedDeviceId, updateDeviceRoomAssignment]);

  return (
    <StyledRoomAssignmentSection>
      <Typography variant={'body'}>Room</Typography>
      <Select
        value={roomAssignmentId}
        onChange={(e, value) => {
          const newValue = value as number;
          handleRoomAssignmentChange(newValue);
        }}
        defaultValue={roomAssignmentId}
        placeholder={
          rooms && rooms.length > 0 && selectedDeviceRoomAssignmentId
            ? getCurrentRoomName(selectedDeviceRoomAssignmentId, rooms)
            : ''
        }
        optionsList={mapRooms || []}
        variant={'text'}
      />
      <StyledDividerDiv />
    </StyledRoomAssignmentSection>
  );
};
