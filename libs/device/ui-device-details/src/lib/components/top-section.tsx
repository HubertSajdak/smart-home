import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton, Typography } from '@smart-home/shared/ui';
import { deviceColorMapping, deviceIconMapping } from '@smart-home/shared/utils/functions';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';

import {
  StyledDeviceIconContainer,
  StyledDeviceInformation,
  StyledDeviceName,
  StyledTopSection,
} from './top-section.styled';

export const TopSection = () => {
  const theme = useTheme();
  const { setSettingsWindowOpen, deviceTypeId, deviceName, isSelectedDeviceOn } = useDeviceSettingsStore();

  useEffect(() => {
    console.log(deviceTypeId, isSelectedDeviceOn);
  }, [deviceTypeId, isSelectedDeviceOn]);
  return (
    <StyledTopSection>
      <StyledDeviceInformation>
        <StyledDeviceIconContainer $backgroundColor={deviceColorMapping(deviceTypeId || 0, theme, isSelectedDeviceOn)}>
          <Icon name={deviceIconMapping(deviceTypeId || 0)} />
        </StyledDeviceIconContainer>
        <StyledDeviceName>
          <Typography variant={'bodyBold'}>{deviceName}</Typography>
          <Typography variant={'body'}>{isSelectedDeviceOn ? 'On' : 'Off'}</Typography>
        </StyledDeviceName>
      </StyledDeviceInformation>
      <IconButton
        color={'grey'}
        icon={<Icon name={'Close'} color={'white'} />}
        onClick={() => setSettingsWindowOpen(false, null, '', isSelectedDeviceOn)}
      />
    </StyledTopSection>
  );
};
