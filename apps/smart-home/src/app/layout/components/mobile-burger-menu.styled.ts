import styled from 'styled-components';

export const StyledMobileBurgerMenu = styled.div`
  display: flex;
  margin-left: auto;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;
