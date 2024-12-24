import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { Typography } from '@smart-home/shared/ui';
import { deviceColorMapping, deviceIconMapping, truncateString } from '@smart-home/shared/utils/functions';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React from 'react';
import { useTheme } from 'styled-components';

import {
  StyledCardInformation,
  StyledDeviceCard,
  StyledIconBackground,
  StyledOpenDetailsIcon,
} from './device-card.styled';

interface IDeviceCardProps {
  id: number;
  deviceType: number;
  deviceName: string;
  isOn: boolean;
  onCardClick: () => void;
}

const DeviceCard = ({ deviceType, deviceName, isOn, onCardClick }: IDeviceCardProps) => {
  const theme = useTheme();
  const { setSettingsWindowOpen } = useDeviceSettingsStore();
  return (
    <StyledDeviceCard onClick={onCardClick} $color={deviceColorMapping(deviceType, theme, isOn)}>
      <StyledOpenDetailsIcon
        onClick={(e) => {
          e.stopPropagation();
          setSettingsWindowOpen(true, deviceType, deviceName, isOn);
        }}
      >
        <Icon name="Dots" />
      </StyledOpenDetailsIcon>
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
