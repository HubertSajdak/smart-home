import styled from 'styled-components';

export const StyledSidebar = styled.aside(({ theme }) => ({
  gap: theme.spacing(3.75),
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '100vh',
}));
export const StyledTitle = styled.div(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: theme.typography.fontSize.large,
  padding: theme.spacing(4),
  paddingBottom: 0,
}));
export const StyledNavigation = styled.div(({ theme }) => ({
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: `${theme.spacing(0, 4)}`,

  '&::-webkit-scrollbar': {
    width: '5px',
    paddingLeft: `${theme.spacing(1)}`,
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.primary.light,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.text.grey,
    borderRadius: `${theme.spacing(2)}`,
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.common.white,
  },
}));
