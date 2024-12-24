import styled from 'styled-components';

export const StyledLightSettings = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;
`;
