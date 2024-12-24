import { useGetRoomDevices, useUpdateDevicePowerSettings } from '@smart-home/device/data-access-device-list';
import { Typography } from '@smart-home/shared/ui';
import { useDeviceStore } from '@smart-home/shared/utils/store';
import React, { useCallback } from 'react';

import DeviceCard from './device-card';
import DeviceRow from './device-row';
import { StyledDeviceList, StyledDeviceSection } from './device-section.styled';

interface IDeviceSectionProps {
  roomId: number;
  roomLabel: string;
}

const DeviceSection = ({ roomId, roomLabel }: IDeviceSectionProps) => {
  const deviceListDisplayType = useDeviceStore((state) => state.deviceListDisplayType);
  const { data: roomDevices } = useGetRoomDevices(roomId);
  const { mutate: updateDevicePowerMutation } = useUpdateDevicePowerSettings();
  const handleDevicePowerOn = useCallback(
    ({ deviceId, isOn }: { deviceId: number; isOn: boolean }) => {
      updateDevicePowerMutation({ deviceId, isOn });
    },
    [updateDevicePowerMutation]
  );
  return (
    <StyledDeviceSection>
      <div>
        <Typography color={'light'} variant={'headerM'}>
          {roomLabel}
        </Typography>
      </div>
      <StyledDeviceList $displayType={deviceListDisplayType}>
        {roomDevices && roomDevices.length > 0 ? (
          roomDevices.map(({ deviceName, deviceTypeId, id, isOn }) => {
            if (deviceListDisplayType === 'grid') {
              return (
                <DeviceCard
                  key={id}
                  deviceName={deviceName}
                  deviceType={deviceTypeId}
                  isOn={isOn}
                  id={id}
                  onCardClick={() =>
                    handleDevicePowerOn({
                      deviceId: id,
                      isOn: !isOn,
                    })
                  }
                />
              );
            }
            return (
              <DeviceRow
                key={id}
                deviceName={deviceName}
                deviceType={deviceTypeId}
                isOn={isOn}
                id={id}
                onRowClick={() =>
                  handleDevicePowerOn({
                    deviceId: id,
                    isOn: !isOn,
                  })
                }
              />
            );
          })
        ) : (
          <Typography variant={'body'}>No devices assigned</Typography>
        )}
      </StyledDeviceList>
    </StyledDeviceSection>
  );
};

export default DeviceSection;
