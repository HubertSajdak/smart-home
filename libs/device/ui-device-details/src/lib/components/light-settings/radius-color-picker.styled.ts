import '@radial-color-picker/react-color-picker/dist/style.css';

import ColorPicker from '@radial-color-picker/react-color-picker';
import styled from 'styled-components';

export const StyledColorPickerContainer = styled('div')`
  position: relative;
`;
export const StyledIconWrapper = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledColorPicker = styled(ColorPicker)`
  .rcp__knob {
    background: transparent;
    border: 6px solid white;
    width: 50px;
    height: 50px;
    top: 1%;
    left: 46.5%;
    z-index: 999;
  }

  .rcp__palette {
    mask-image: radial-gradient(circle at 50% 50%, transparent 43.5%, black 10%);
  }

  .rcp__well {
    width: 120px;
    height: 120px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .rcp__ripple {
    animation: none;
  }

  .pressed {
    @keyframes rcp-beat {
      from {
        height: 120px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      to {
        height: 120px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    @keyframes rcp-ripple {
      from {
        transform: translate(0);
      }
      to {
        transform: translate(0);
      }
    }
  }
`;
