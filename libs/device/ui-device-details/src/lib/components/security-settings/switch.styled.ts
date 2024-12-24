import { switchClasses } from '@mui/base';
import styled from 'styled-components';

export const StyledSwitchRoot = styled('span')(
  ({ theme }) => `
  box-sizing: border-box;
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 180px;
  height: 64px;
  margin: 10px;
  cursor: pointer;

  &.${switchClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchClasses.track} {
    box-sizing: border-box;
    background: ${theme.palette.primary.main};
    border: 1px solid ${theme.palette.primary.light};
    border-radius: 36px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
  }

  &:hover .${switchClasses.track} {
    background: ${theme.palette.grey[30]};
    border-color: ${theme.palette.grey[30]};
  }

  &.${switchClasses.focusVisible} .${switchClasses.track} {
    box-shadow: 0 0 0 3px ${theme.palette.device.security};
  }

  & .${switchClasses.thumb} {
    box-sizing: border-box;
    border: 1px solid ${theme.palette.grey[10]};
    display: block;
    width: 56px;
    height: 56px;
    top: 4px;
    left: 5px;
    border-radius: 36px;
    background-color: #FFF;
    position: relative;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }

  &.${switchClasses.checked} {
    .${switchClasses.thumb} {
      left: 120px;
      background-color: #fff;
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.3);
    }

    .${switchClasses.track} {
      border: none;
      background: ${theme.palette.device.security};
    }
  }

  &:hover .${switchClasses.checked} .${switchClasses.track} {
    background: ${theme.palette.device.security};
  }

  & .${switchClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
);
