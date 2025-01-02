import { useUpdateDeviceSettings } from '@smart-home/device/data-access-device-list';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { StyledVolumeSlider, StyledVolumeSliderContainer } from './volume-slider.styled';

const VolumeSlider = () => {
  const { mutate: deviceSettingsMutation } = useUpdateDeviceSettings();
  const { selectedDeviceSettings, selectedDeviceId } = useDeviceSettingsStore();
  const [volume, setVolume] = useState(0);

  const handleVolumeChange = (volume: number | number[]) => {
    if (typeof volume === 'number') {
      setVolume(volume);
    }
  };
  const updateVolume = useDebouncedCallback(() => {
    if (!selectedDeviceId || !selectedDeviceSettings || !('volume' in selectedDeviceSettings)) return;
    const mappedSettings = {
      ...selectedDeviceSettings,
      volume,
    };
    deviceSettingsMutation({ deviceId: selectedDeviceId, deviceSettings: mappedSettings });
  }, 300);

  useEffect(() => {
    if (!selectedDeviceSettings || !('volume' in selectedDeviceSettings)) return;
    handleVolumeChange(selectedDeviceSettings.volume);
  }, [selectedDeviceSettings]);

  useEffect(() => {
    updateVolume();
  }, [updateVolume, volume]);

  return (
    <StyledVolumeSliderContainer>
      <StyledVolumeSlider value={volume} onChange={(e, value) => handleVolumeChange(value)} />
      <Icon name={'Speaker'} color={'white'} height={32} width={32} />
    </StyledVolumeSliderContainer>
  );
};

export default VolumeSlider;
