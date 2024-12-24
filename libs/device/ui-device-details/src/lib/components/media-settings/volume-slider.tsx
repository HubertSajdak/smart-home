import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React from 'react';

import { StyledVolumeSlider, StyledVolumeSliderContainer } from './volume-slider.styled';

const VolumeSlider = () => {
  return (
    <StyledVolumeSliderContainer>
      <StyledVolumeSlider />
      <Icon name={'Speaker'} color={'white'} height={32} width={32} />
    </StyledVolumeSliderContainer>
  );
};

export default VolumeSlider;
