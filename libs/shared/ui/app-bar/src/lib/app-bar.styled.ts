import styled from 'styled-components';

export const StyledAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.screen.isDesktop}) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const FiltersTabsSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
`;
