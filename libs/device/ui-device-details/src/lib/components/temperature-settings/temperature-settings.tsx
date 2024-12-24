import CircularSlider from '@fseehawer/react-circular-slider';
import React from 'react';
import { useTheme } from 'styled-components';

export const TemperatureSettings = () => {
  const theme = useTheme();
  return (
    <div>
      <CircularSlider
        label={'Temperature °C'}
        labelColor={theme.palette.common.white}
        valueFontSize={'48px'}
        labelFontSize={'24px'}
        progressSize={24}
        min={16}
        max={26}
        knobSize={32}
        data={['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']}
        onChange={(value: number) => {
          console.log(value);
        }}
      />
    </div>
  );
};
