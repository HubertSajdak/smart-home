import { Button } from '@mui/base';
import { styled } from 'styled-components';

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.light};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  font-weight: bold;
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.palette.text.light};
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
