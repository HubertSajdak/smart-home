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
  onChange: (e: Event, value: number | number[]) => void;
}

export const BrightnessSlider = ({ color, onChange }: IBrightnessSlider) => {
  return (
    <StyledBrightnessSliderContainer>
      <Icon name={'Sunny'} color={'grey'} height={24} width={24} />
      <StyledBrightnessSlider
        $color={color}
        value={color.alpha}
        step={0.1}
        min={0.1}
        max={1}
        onChange={(e, value) => onChange(e, value)}
      />
      <Icon name={'Sunny'} color={'white'} height={32} width={32} />
    </StyledBrightnessSliderContainer>
  );
};
