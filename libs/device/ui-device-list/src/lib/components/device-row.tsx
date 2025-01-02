import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { Typography } from '@smart-home/shared/ui';
import { deviceColorMapping, deviceIconMapping, truncateString } from '@smart-home/shared/utils/functions';
import { TDeviceSettings, useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React from 'react';
import { useTheme } from 'styled-components';

import {
  StyledCardInformation,
  StyledDeviceRow,
  StyledIconBackground,
  StyledOpenDetailsIcon,
} from './device-row.styled';

interface IDeviceRowProps {
  id: number;
  deviceTypeId: number;
  deviceName: string;
  isOn: boolean;
  roomAssignmentId: number;
  onRowClick: () => void;
  deviceSettings: TDeviceSettings;
}

const DeviceRow = ({
  id,
  roomAssignmentId,
  deviceTypeId,
  deviceName,
  isOn,
  onRowClick,
  deviceSettings,
}: IDeviceRowProps) => {
  const theme = useTheme();
  const { setSettingsWindowOpen, isSelectedDeviceOn } = useDeviceSettingsStore();

  return (
    <StyledDeviceRow onClick={onRowClick} $color={deviceColorMapping(deviceTypeId, theme, isOn)}>
      <StyledIconBackground>
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
          {truncateString(deviceName, 60)}
        </Typography>{' '}
      </StyledCardInformation>
      <Typography variant={'body'} color={'dark'}>
        {isOn ? 'On' : 'Off'}
      </Typography>
      <StyledOpenDetailsIcon
        onClick={(e) => {
          e.stopPropagation();
          setSettingsWindowOpen(
            id,
            true,
            deviceTypeId,
            deviceName,
            isSelectedDeviceOn,
            deviceSettings,
            roomAssignmentId
          );
        }}
      >
        <Icon name="Dots" />
      </StyledOpenDetailsIcon>
    </StyledDeviceRow>
  );
};

export default DeviceRow;
