import { IDevicesByRoomDto } from '@smart-home/device/data-access-device-list';
import { Typography } from '@smart-home/shared/ui';
import React from 'react';

import DeviceCard from './device-card';
import { StyledDeviceList, StyledDeviceSection } from './device-section.styled';

type TDeviceSectionProps = IDevicesByRoomDto;

const DeviceSection = ({ label, allDevices }: TDeviceSectionProps) => {
  return (
    <StyledDeviceSection>
      <div>
        <Typography color={'light'} variant={'headerM'}>
          {label}
        </Typography>
      </div>
      <StyledDeviceList>
        {allDevices &&
          allDevices.length > 0 &&
          allDevices.map(({ deviceName, deviceType, id, isOn }) => (
            <DeviceCard deviceName={deviceName} deviceType={deviceType} isOn={isOn} id={id} />
          ))}
      </StyledDeviceList>
    </StyledDeviceSection>
  );
};

export default DeviceSection;
