import { useUpdateDeviceSettings } from '@smart-home/device/data-access-device-list';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React, { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { BrightnessSlider } from './brightness-slider';
import { StyledLightSettings } from './light-settings.styled';
import { RadiusColorPicker } from './radius-color-picker';

const LightSettings = () => {
  const { selectedDeviceId, selectedDeviceSettings } = useDeviceSettingsStore();
  const { mutate: deviceSettingsMutation } = useUpdateDeviceSettings();
  const [color, setColor] = useState({
    hue: 100,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const onColorChange = useCallback((hue: number) => {
    setColor((prev) => ({ ...prev, hue }));
  }, []);
  const onIntensityChange = useCallback((e: Event, value: number | number[]) => {
    const newValue = value as number;
    setColor((prev) => ({ ...prev, alpha: newValue }));
  }, []);
  const updateDevice = useDebouncedCallback(() => {
    if (!selectedDeviceId) return;
    const mappedSettings = {
      light_color: color.hue,
      light_intensity: color.alpha,
    };
    deviceSettingsMutation({ deviceId: selectedDeviceId, deviceSettings: mappedSettings });
  }, 300);
  useEffect(() => {
    if (!selectedDeviceSettings || !('light_color' in selectedDeviceSettings)) return;
    setColor((prev) => ({
      ...prev,
      hue: selectedDeviceSettings.light_color,
      alpha: selectedDeviceSettings.light_intensity,
    }));
  }, [selectedDeviceSettings]);
  useEffect(() => {
    updateDevice();
  }, [updateDevice, color]);
  return (
    <StyledLightSettings>
      <RadiusColorPicker
        color={{
          ...color,
        }}
        onInput={onColorChange}
      />
      <BrightnessSlider color={{ ...color }} onChange={onIntensityChange} />
    </StyledLightSettings>
  );
};

export default LightSettings;
