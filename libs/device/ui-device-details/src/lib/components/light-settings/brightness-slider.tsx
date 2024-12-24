import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React from 'react';

import { StyledBrightnessSlider, StyledBrightnessSliderContainer } from './brightness-slider.styled';

interface IColorSettings {
  hue: number;
  saturation: number;
  luminosity: number;
  alpha: number;
}

interface IBrightnessSlider {
  color: IColorSettings;
}

export const BrightnessSlider = ({ color }: IBrightnessSlider) => {
  return (
    <StyledBrightnessSliderContainer>
      <Icon name={'Sunny'} color={'grey'} height={24} width={24} />
      <StyledBrightnessSlider $color={color} />
      <Icon name={'Sunny'} color={'white'} height={32} width={32} />
    </StyledBrightnessSliderContainer>
  );
};
