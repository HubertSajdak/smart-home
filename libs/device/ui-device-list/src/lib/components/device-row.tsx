import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { Typography } from '@smart-home/shared/ui';
import { deviceColorMapping, deviceIconMapping, truncateString } from '@smart-home/shared/utils/functions';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
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
  deviceType: number;
  deviceName: string;
  isOn: boolean;
  onRowClick: () => void;
}

const DeviceRow = ({ deviceType, deviceName, isOn, onRowClick }: IDeviceRowProps) => {
  const theme = useTheme();
  const { setSettingsWindowOpen, isSelectedDeviceOn } = useDeviceSettingsStore();

  return (
    <StyledDeviceRow onClick={onRowClick} $color={deviceColorMapping(deviceType, theme, isOn)}>
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
      <StyledOpenDetailsIcon onClick={() => setSettingsWindowOpen(true, deviceType, deviceName, isSelectedDeviceOn)}>
        <Icon name="Dots" />
      </StyledOpenDetailsIcon>
    </StyledDeviceRow>
  );
};

export default DeviceRow;
