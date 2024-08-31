import styled from 'styled-components';

export const StyledLayout = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '276px 1fr',
  gridTemplateRows: '1fr',
  height: '100vh',
  [`@media (max-width:${theme.screen.isDesktop})`]: {
    gridTemplateColumns: '1fr',
  },
}));
export const StyledLayoutContentWrapper = styled.main(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: `${theme.spacing(3.75)} ${theme.spacing(8.75)}`,
  gap: theme.spacing(5.75),
  display: 'flex',
  flexDirection: 'column',
}));
export const StyledLayoutSidebarWrapper = styled.div<{ $isSidebarOpen: boolean }>(({ $isSidebarOpen, theme }) => ({
  backgroundColor: theme.palette.primary.light,
  [`@media (max-width:${theme.screen.isDesktop})`]: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    width: '360px',
    marginRight: $isSidebarOpen ? 0 : '-110%',
  },
  [`@media (max-width:${theme.screen.isTablet})`]: {
    width: '100%',
    marginRight: $isSidebarOpen ? 0 : '-110%',
  },
}));
