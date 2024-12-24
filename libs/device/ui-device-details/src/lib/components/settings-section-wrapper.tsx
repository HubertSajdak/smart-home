import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React from 'react';

import LightSettings from './light-settings/light-settings';
import { MediaSettings } from './media-settings/media-settings';
import SecuritySettings from './security-settings/security-settings';
import { StyledSettingsSection } from './settings-section-wrapper.styled';
import { TemperatureSettings } from './temperature-settings/temperature-settings';

export const SettingsSectionWrapper = () => {
  const { deviceTypeId } = useDeviceSettingsStore();
  let deviceSettings;
  if (deviceTypeId === 3) {
    deviceSettings = <TemperatureSettings />;
  }
  if (deviceTypeId === 4) {
    deviceSettings = <LightSettings />;
  }
  if (deviceTypeId === 2) {
    deviceSettings = <MediaSettings />;
  }
  if (deviceTypeId === 1) {
    deviceSettings = <SecuritySettings />;
  }

  return <StyledSettingsSection>{deviceSettings}</StyledSettingsSection>;
};
