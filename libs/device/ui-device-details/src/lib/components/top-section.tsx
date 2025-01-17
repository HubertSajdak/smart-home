import { useDeleteDevice } from '@smart-home/device/data-access-device-list';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton, Typography } from '@smart-home/shared/ui';
import { deviceColorMapping, deviceIconMapping } from '@smart-home/shared/utils/functions';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import {
  StyledDeviceActionButtons,
  StyledDeviceIconContainer,
  StyledDeviceInformation,
  StyledDeviceName,
  StyledTopSection,
} from './top-section.styled';

export const TopSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { mutate: deleteDeviceMutation } = useDeleteDevice();
  const { setSettingsWindowOpen, selectedDeviceTypeId, selectedDeviceName, isSelectedDeviceOn, selectedDeviceId } =
    useDeviceSettingsStore();
  const deleteDevice = useCallback(
    (deviceId: number) => {
      deleteDeviceMutation(deviceId);
    },
    [deleteDeviceMutation]
  );
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
          <Typography variant={'body'}>{isSelectedDeviceOn ? t('device.on') : t('device.off')}</Typography>
        </StyledDeviceName>
      </StyledDeviceInformation>
      <StyledDeviceActionButtons>
        <IconButton
          color="grey"
          icon={<Icon name={'TrashBin'} color={'white'} width={16} height={16} />}
          onClick={() => {
            if (!selectedDeviceId) return;
            deleteDevice(selectedDeviceId);
            setSettingsWindowOpen(null, false, null, '', isSelectedDeviceOn, null, null);
          }}
        />
        <IconButton
          color={'grey'}
          icon={<Icon name={'Close'} color={'white'} width={16} height={16} />}
          onClick={() => setSettingsWindowOpen(null, false, null, '', isSelectedDeviceOn, null, null)}
        />
      </StyledDeviceActionButtons>
    </StyledTopSection>
  );
};
