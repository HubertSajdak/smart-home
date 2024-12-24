import React from 'react';

import ChannelList from './channel-list';
import { StyledMediaSettings } from './media-settings.styled';
import VolumeSlider from './volume-slider';

export const MediaSettings = () => {
  return (
    <StyledMediaSettings>
      <ChannelList />
      <VolumeSlider />
    </StyledMediaSettings>
  );
};
