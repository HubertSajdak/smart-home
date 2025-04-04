import { Typography } from '@smart-home/shared/design-system';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { deviceColorMapping, deviceIconMapping, truncateString } from '@smart-home/shared/utils/functions';
import { TDeviceSettings, useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import {
  StyledCardInformation,
  StyledDeviceCard,
  StyledIconBackground,
  StyledOpenDetailsIcon,
} from './device-card.styled';

interface IDeviceCardProps {
  id: number;
  deviceTypeId: number;
  deviceName: string;
  isOn: boolean;
  roomAssignmentId: number;
  onCardClick: () => void;
  deviceSettings: TDeviceSettings;
}

const DeviceCard = ({
  id,
  roomAssignmentId,
  deviceTypeId,
  deviceName,
  isOn,
  onCardClick,
  deviceSettings,
}: IDeviceCardProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { setSettingsWindowOpen } = useDeviceSettingsStore();
  return (
    <StyledDeviceCard onClick={onCardClick} $color={deviceColorMapping(deviceTypeId, theme, isOn)}>
      <StyledOpenDetailsIcon
        onClick={(e) => {
          e.stopPropagation();
          setSettingsWindowOpen(id, true, deviceTypeId, deviceName, isOn, deviceSettings, roomAssignmentId);
        }}
      >
        <Icon name="Dots" />
      </StyledOpenDetailsIcon>
      <StyledIconBackground
        $lightColor={
          deviceTypeId === 4 && deviceSettings && 'light_color' in deviceSettings && 'light_intensity' in deviceSettings
            ? {
                color: deviceSettings.light_color,
                intensity: deviceSettings.light_intensity,
              }
            : undefined
        }
      >
        {deviceTypeId !== 3 ? (
          <Icon name={deviceIconMapping(deviceTypeId)} />
        ) : (
          <Typography variant={'bodyBold'} color={'dark'}>
            {deviceSettings && 'temperature' in deviceSettings && deviceSettings.temperature}°C
          </Typography>
        )}
      </StyledIconBackground>
      <StyledCardInformation>
        <Typography variant={'bodyBold'} color={'dark'}>
          {truncateString(deviceName, 15)}
        </Typography>{' '}
        <Typography variant={'body'} color={'dark'}>
          {isOn ? t('device.on') : t('device.off')}
        </Typography>
      </StyledCardInformation>
    </StyledDeviceCard>
  );
};

export default DeviceCard;
