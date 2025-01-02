import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React from 'react';

import LightSettings from './light-settings/light-settings';
import { MediaSettings } from './media-settings/media-settings';
import SecuritySettings from './security-settings/security-settings';
import { StyledSettingsSection } from './settings-section-wrapper.styled';
import { TemperatureSettings } from './temperature-settings/temperature-settings';

export const SettingsSectionWrapper = () => {
  const { selectedDeviceTypeId } = useDeviceSettingsStore();
  let deviceSettings;
  if (selectedDeviceTypeId === 3) {
    deviceSettings = <TemperatureSettings />;
  }
  if (selectedDeviceTypeId === 4) {
    deviceSettings = <LightSettings />;
  }
  if (selectedDeviceTypeId === 2) {
    deviceSettings = <MediaSettings />;
  }
  if (selectedDeviceTypeId === 1) {
    deviceSettings = <SecuritySettings />;
  }

  return <StyledSettingsSection>{deviceSettings}</StyledSettingsSection>;
};
