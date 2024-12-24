import styled from 'styled-components';

export const StyledMediaSettings = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;
