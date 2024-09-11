import styled from 'styled-components';

export const StyledLayout = styled.div(() => ({
  display: 'flex',
}));
export const StyledLayoutContentWrapper = styled.main(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main,
  marginLeft: '287px',
  width: '100vw',
  minHeight: '100vh',
  padding: `${theme.spacing(3.75)} ${theme.spacing(8.75)}`,
  [`@media (max-width:${theme.screen.isDesktop})`]: {
    marginLeft: '0',
    padding: `${theme.spacing(3.75)} ${theme.spacing(2)}`,
  },
}));
export const StyledLayoutSidebarWrapper = styled.div<{ $isSidebarOpen: boolean }>(({ $isSidebarOpen, theme }) => ({
  backgroundColor: theme.palette.primary.light,
  position: 'fixed',
  width: '287px',
  height: '100vh',
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
