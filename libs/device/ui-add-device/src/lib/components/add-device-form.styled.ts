import styled from 'styled-components';

export const StyledFormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const StyledDeviceTypeCardContainer = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledInputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(0, 3, 0, 3)};
`;
