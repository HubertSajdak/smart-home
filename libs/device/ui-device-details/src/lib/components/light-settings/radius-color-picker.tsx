import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React from 'react';

import { StyledColorPicker, StyledColorPickerContainer, StyledIconWrapper } from './radius-color-picker.styled';

interface IColorSettings {
  hue: number;
  saturation: number;
  luminosity: number;
  alpha: number;
}

interface IRadiusColorPicker {
  onInput: ((hue: number) => void) | undefined;
  color: IColorSettings;
}

export const RadiusColorPicker = ({ color, onInput }: IRadiusColorPicker) => {
  return (
    <StyledColorPickerContainer>
      <StyledColorPicker {...color} onInput={onInput} variant={'persistent'} />
      <StyledIconWrapper>
        <Icon name={'Power'} height={50} width={50} />
      </StyledIconWrapper>
    </StyledColorPickerContainer>
  );
};
