import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton, Typography } from '@smart-home/shared/ui';
import { deviceColorMapping, deviceIconMapping } from '@smart-home/shared/utils/functions';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React from 'react';
import { useTheme } from 'styled-components';

import {
  StyledDeviceIconContainer,
  StyledDeviceInformation,
  StyledDeviceName,
  StyledTopSection,
} from './top-section.styled';

export const TopSection = () => {
  const theme = useTheme();
  const { setSettingsWindowOpen, selectedDeviceTypeId, selectedDeviceName, isSelectedDeviceOn } =
    useDeviceSettingsStore();

  return (
    <StyledTopSection>
      <StyledDeviceInformation>
        <StyledDeviceIconContainer
          $backgroundColor={deviceColorMapping(selectedDeviceTypeId || 0, theme, isSelectedDeviceOn)}
        >
          <Icon name={deviceIconMapping(selectedDeviceTypeId || 0)} />
        </StyledDeviceIconContainer>
        <StyledDeviceName>
          <Typography variant={'bodyBold'}>{selectedDeviceName}</Typography>
          <Typography variant={'body'}>{isSelectedDeviceOn ? 'On' : 'Off'}</Typography>
        </StyledDeviceName>
      </StyledDeviceInformation>
      <IconButton
        color={'grey'}
        icon={<Icon name={'Close'} color={'white'} />}
        onClick={() => setSettingsWindowOpen(null, false, null, '', isSelectedDeviceOn, null, null)}
      />
    </StyledTopSection>
  );
};
