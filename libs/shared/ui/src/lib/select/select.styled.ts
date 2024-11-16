import { Button, Option, optionClasses, Select } from '@mui/base';
import { styled } from 'styled-components';

export const StyledSelect = styled(Select)`
  width: 100%;
  height: 36px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.grey[30]};
  border-radius: ${({ theme }) => theme.spacing(1)};
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
export const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  padding: ${({ theme }) => theme.spacing(1, 2, 1, 2)};
  cursor: pointer;
  min-width: 150px;
  border: 1px solid ${({ theme }) => theme.palette.grey[30]};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
