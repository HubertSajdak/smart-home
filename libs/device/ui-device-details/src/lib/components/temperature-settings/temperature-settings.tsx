import { useUpdateDeviceSettings } from '@smart-home/device/data-access-device-list';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useDebouncedCallback } from 'use-debounce';

import { StyledCircularSlider } from './temperature-settings.styled';

export const TemperatureSettings = () => {
  const theme = useTheme();
  const { selectedDeviceSettings, selectedDeviceId } = useDeviceSettingsStore();
  const { mutate: deviceSettingsMutation } = useUpdateDeviceSettings();
  const [temperature, setTemperature] = useState(0);
  const handleTemperatureChange = (value: number) => {
    setTemperature(value);
  };
  const updateTemperature = useDebouncedCallback(() => {
    if (!selectedDeviceId) return;
    const mappedSettings = {
      temperature: temperature,
    };
    deviceSettingsMutation({ deviceId: selectedDeviceId, deviceSettings: mappedSettings });
  }, 300);

  useEffect(() => {
    if (!selectedDeviceSettings || !('temperature' in selectedDeviceSettings)) return;
    setTemperature(selectedDeviceSettings.temperature);
  }, [selectedDeviceSettings]);

  useEffect(() => {
    updateTemperature();
  }, [updateTemperature, temperature]);

  return (
    <StyledCircularSlider
      label={'Temperature °C'}
      labelColor={theme.palette.common.white}
      valueFontSize={'48px'}
      labelFontSize={'24px'}
      progressSize={24}
      dataIndex={temperature - 16}
      min={16}
      max={26}
      knobSize={32}
      data={[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]}
      onChange={(value: number) => {
        handleTemperatureChange(value);
      }}
    />
  );
};
