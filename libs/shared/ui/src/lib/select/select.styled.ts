import { Button, Option, optionClasses, Select } from '@mui/base';
import { styled } from 'styled-components';

export const StyledSelect = styled(Select)<{ variant?: 'text' | 'input' }>`
  width: ${({ variant }) => (variant === 'input' ? '100%' : 'auto')};
  height: ${({ variant }) => (variant === 'input' ? '36px' : 'auto')};
  background-color: ${({ theme, variant }) => (variant === 'input' ? theme.palette.primary.main : 'none')};
  border: 1px solid ${({ theme, variant }) => (variant === 'input' ? theme.palette.grey[30] : 'none')};
  border-radius: ${({ theme, variant }) => (variant === 'input' ? theme.spacing(1) : 0)};
  color: ${({ theme }) => theme.palette.text.light};
`;
export const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding:  ${theme.spacing(1)};
  margin: ${theme.spacing(0.5, 0)};
  border-radius:  ${theme.spacing(1)};
  cursor: default;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
     background-color: ${theme.palette.primary.light};

  }
    &.${optionClasses.selected} {
     background-color: ${theme.palette.common.white};
    color: ${theme.palette.text.dark};
  }

  &.${optionClasses.highlighted} {
   background-color: ${theme.palette.common.white};
    color: ${theme.palette.text.dark};
  }

  &:focus-visible {
    outline: 3px solid ${theme.palette.primary.light};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
       background-color: ${theme.palette.common.white};
    color: ${theme.palette.text.dark};
  }

  text-transform: capitalize
  `
);

export const StyledListbox = styled('ul')(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  padding:  ${theme.spacing(1)};
  margin: ${theme.spacing(1, 0)};
  border-radius: ${theme.spacing(1.5)};
  gap:${theme.spacing(1)}
  overflow: auto;
  outline: 0;
  background: ${theme.palette.primary.main};
  color: ${theme.palette.text.light}
  `
);

export const StyledPopup = styled('div')`
  z-index: 1;
  min-width: 288px;
`;

export const StyledDivIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing(1)};
`;
export const StyledButton = styled(Button)<{ variant?: 'text' | 'input' }>`
  display: flex;
  justify-content: ${({ variant }) => (variant === 'input' ? 'space-between' : 'center')};
  align-items: center;
  height: 36px;
  padding: ${({ theme, variant }) => (variant === 'input' ? theme.spacing(2) : theme.spacing(1, 2, 3.5, 0))};
  cursor: pointer;
  min-width: 150px;
  border: ${({ theme, variant }) => (variant === 'input' ? `1px solid ${theme.palette.grey[30]}` : 'none')};
  background-color: ${({ theme, variant }) => (variant === 'input' ? theme.palette.primary.main : 'transparent')};
  font-weight: ${({ variant }) => variant === 'text' && 'bold'};
`;
