import { sliderClasses } from '@mui/base/Slider';
import { Slider as BaseSlider } from '@mui/base/Slider/Slider';
import styled from 'styled-components';

export const StyledVolumeSliderContainer = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  width: 100%;
`;
export const StyledVolumeSlider = styled(BaseSlider)(
  ({ theme }) => `
  color: ${theme.palette.grey[10]};
  height: 4px;
  width: 100%;
  padding: 16px 0;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &.${sliderClasses.disabled} {
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.grey[30]};
    opacity: 0.4;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 6px;
    background-color: ${theme.palette.grey[10]};
    opacity: 0.3;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 6px;
    background-color: ${theme.palette.device.media};
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: ${theme.palette.device.media};
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;

    &:hover {
    }

    &.${sliderClasses.focusVisible} {
      outline: none;
    }

    &.${sliderClasses.active} {
      outline: none;
      transform: scale(1.2);
    }

    &.${sliderClasses.disabled} {
    }
  }
`
);
