import styled from 'styled-components';

export const StyledFormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;
