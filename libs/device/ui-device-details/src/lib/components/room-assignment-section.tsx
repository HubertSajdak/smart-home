import { useGetRooms } from '@smart-home/device/data-access-room-list';
import { Select, Typography } from '@smart-home/shared/ui';
import React from 'react';

import { StyledDividerDiv, StyledRoomAssignmentSection } from './room-assignment-section.styled';

export const RoomAssignmentSection = () => {
  const { data: rooms } = useGetRooms();
  const mapRooms =
    rooms &&
    rooms.map((room) => {
      return {
        value: room.id,
        label: room.label,
      };
    });
  return (
    <StyledRoomAssignmentSection>
      <Typography variant={'body'}>Room</Typography>
      <Select placeholder={'basement'} optionsList={mapRooms || []} variant={'text'} />
      <StyledDividerDiv />
    </StyledRoomAssignmentSection>
  );
};
