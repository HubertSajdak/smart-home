import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { Typography } from '@smart-home/shared/ui';
import { deviceColorMapping, deviceIconMapping, truncateString } from '@smart-home/shared/utils/functions';
import React from 'react';
import { useTheme } from 'styled-components';

import { StyledCardInformation, StyledDeviceRow, StyledIconBackground } from './device-row.styled';

interface IDeviceRowProps {
  id: number;
  deviceType: number;
  deviceName: string;
  isOn: boolean;
}

const DeviceRow = ({ deviceType, deviceName, isOn }: IDeviceRowProps) => {
  const theme = useTheme();
  return (
    <StyledDeviceRow $color={deviceColorMapping(deviceType, theme)}>
      <StyledIconBackground>
        {deviceType !== 3 ? (
          <Icon name={deviceIconMapping(deviceType)} />
        ) : (
          <Typography variant={'bodyBold'} color={'dark'}>
            23
          </Typography>
        )}
      </StyledIconBackground>
      <StyledCardInformation>
        <Typography variant={'bodyBold'} color={'dark'}>
          {truncateString(deviceName, 60)}
        </Typography>{' '}
      </StyledCardInformation>
      <Typography variant={'body'} color={'dark'}>
        {isOn ? 'On' : 'Off'}
      </Typography>
    </StyledDeviceRow>
  );
};

export default DeviceRow;
