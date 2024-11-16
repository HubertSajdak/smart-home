import { IDeviceDto } from '@smart-home/device/data-access-device-list';
import { Typography } from '@smart-home/shared/ui';
import { useDeviceStore } from '@smart-home/shared/utils/store';
import React from 'react';

import DeviceCard from './device-card';
import DeviceRow from './device-row';
import { StyledDeviceList, StyledDeviceSection } from './device-section.styled';

interface IDeviceSectionProps {
  roomId: number;
  roomLabel: string;
  allDevices: IDeviceDto[];
}

const DeviceSection = ({ roomId, roomLabel, allDevices }: IDeviceSectionProps) => {
  const { deviceListDisplayType } = useDeviceStore();
  const devicesAssignedToRoom = allDevices.filter(({ roomAssignmentId }) => roomAssignmentId === roomId);

  return (
    <StyledDeviceSection>
      <div>
        <Typography color={'light'} variant={'headerM'}>
          {roomLabel}
        </Typography>
      </div>
      <StyledDeviceList $displayType={deviceListDisplayType}>
        {devicesAssignedToRoom && devicesAssignedToRoom.length > 0 ? (
          devicesAssignedToRoom.map(({ deviceName, deviceTypeId, id, isOn }) => {
            if (deviceListDisplayType === 'grid') {
              return <DeviceCard key={id} deviceName={deviceName} deviceType={deviceTypeId} isOn={isOn} id={id} />;
            }
            return <DeviceRow key={id} deviceName={deviceName} deviceType={deviceTypeId} isOn={isOn} id={id} />;
          })
        ) : (
          <Typography variant={'body'}>No devices assigned</Typography>
        )}
      </StyledDeviceList>
    </StyledDeviceSection>
  );
};

export default DeviceSection;
