import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { Typography } from '@smart-home/shared/ui';
import { truncateString } from '@smart-home/shared/utils/functions';
import React from 'react';
import { useTheme } from 'styled-components';

import { StyledCardInformation, StyledDeviceCard, StyledIconBackground } from './device-card.styled';

interface IDeviceCardProps {
  id: number;
  deviceType: number;
  deviceName: string;
  isOn: boolean;
}

const DeviceCard = ({ deviceType, deviceName, isOn }: IDeviceCardProps) => {
  const theme = useTheme();
  const deviceIconMapping = (deviceTypeId: number) => {
    if (deviceTypeId === 1) {
      return 'HomeHealth';
    }
    if (deviceTypeId === 2) {
      return 'Monitor';
    }
    if (deviceTypeId === 3) {
      return 'Settings';
    }
    if (deviceTypeId === 4) {
      return 'LightBulb';
    }
  };
  const deviceColorMapping = (deviceTypeId: number) => {
    if (deviceTypeId === 1) {
      return theme.palette.device.security;
    }
    if (deviceTypeId === 2) {
      return theme.palette.device.media;
    }
    if (deviceTypeId === 3) {
      return theme.palette.device.temperature;
    }
    if (deviceTypeId === 4) {
      return theme.palette.device.light;
    }
  };
  return (
    <StyledDeviceCard $color={deviceColorMapping(deviceType)}>
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
          {truncateString(deviceName, 15)}
        </Typography>{' '}
        <Typography variant={'body'} color={'dark'}>
          {isOn ? 'On' : 'Off'}
        </Typography>
      </StyledCardInformation>
    </StyledDeviceCard>
  );
};

export default DeviceCard;
