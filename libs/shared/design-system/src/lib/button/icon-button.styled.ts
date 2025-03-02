import { Button } from '@mui/base';
import { DefaultTheme, styled } from 'styled-components';

type TIconButtonColor = 'primary.main' | 'primary.light' | 'white' | 'black' | 'grey';

const getIconButtonBgColor = (color: TIconButtonColor, theme: DefaultTheme) => {
  if (color === 'primary.main') {
    return theme.palette.primary.main;
  }
  if (color === 'primary.light') {
    return theme.palette.primary.light;
  }
  if (color === 'white') {
    return theme.palette.common.white;
  }
  if (color === 'black') {
    return theme.palette.common.black;
  }
  if (color === 'grey') {
    return theme.palette.grey[30];
  }
};

export const StyledIconButton = styled(Button)<{ $color: TIconButtonColor }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ $color, theme }) => getIconButtonBgColor($color, theme)};
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[10]};
  }
  cursor: pointer;
`;
