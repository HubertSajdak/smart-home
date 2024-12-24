import React, { useState } from 'react';

import { BrightnessSlider } from './brightness-slider';
import { StyledLightSettings } from './light-settings.styled';
import { RadiusColorPicker } from './radius-color-picker';

const LightSettings = () => {
  const [color, setColor] = useState({
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const onInput = (hue: number) => {
    setColor((prev) => ({ ...prev, hue }));
  };
  return (
    <StyledLightSettings>
      <RadiusColorPicker color={{ ...color }} onInput={onInput} />
      <BrightnessSlider color={{ ...color }} />
    </StyledLightSettings>
  );
};

export default LightSettings;
