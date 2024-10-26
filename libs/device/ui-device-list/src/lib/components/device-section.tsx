import { IDeviceDto } from '@smart-home/device/data-access-device-list';
import { Typography } from '@smart-home/shared/ui';
import React from 'react';

import DeviceCard from './device-card';
import { StyledDeviceList, StyledDeviceSection } from './device-section.styled';

interface IDeviceSectionProps {
  roomId: number;
  roomLabel: string;
  allDevices: IDeviceDto[];
}

const DeviceSection = ({ roomId, roomLabel, allDevices }: IDeviceSectionProps) => {
  return (
    <StyledDeviceSection>
      <div>
        <Typography color={'light'} variant={'headerM'}>
          {roomLabel}
        </Typography>
      </div>
      <StyledDeviceList>
        {allDevices &&
          allDevices.length > 0 &&
          allDevices.map(({ deviceName, deviceTypeId, id, isOn, roomAssignmentId }) => {
            if (roomAssignmentId === roomId) {
              return <DeviceCard key={id} deviceName={deviceName} deviceType={deviceTypeId} isOn={isOn} id={id} />;
            }
            return null;
          })}
      </StyledDeviceList>
    </StyledDeviceSection>
  );
};

export default DeviceSection;
