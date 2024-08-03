import { Button } from '@mui/base';
import { styled } from 'styled-components';

export const StyledIconButton = styled(Button)<{ $color: 'primary.main' | 'primary.light' | 'white' | 'black' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ $color, theme }) =>
    $color === 'primary.main'
      ? theme.palette.primary.main
      : $color === 'primary.light'
        ? theme.palette.primary.light
        : $color === 'black'
          ? theme.palette.common.black
          : theme.palette.common.white};
  border: none;
  cursor: pointer;
`;
