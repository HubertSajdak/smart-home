import { Input } from '@mui/base';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  width: 100%;

  input {
    padding: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: ${({ theme }) => theme.spacing(1)};
    height: 36px;
    width: 100%;
    color: ${({ theme }) => theme.palette.text.light};
    border: 1px solid ${({ theme }) => theme.palette.grey[30]};
  }
`;
