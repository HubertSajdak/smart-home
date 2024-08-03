import styled from 'styled-components';

export const StyledSidebar = styled.aside(() => ({
  gap: '30px',
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
  height: '800px',
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: `0 ${theme.spacing(4)}`,

  '&::-webkit-scrollbar': {
    width: '5px',
    paddingLeft: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.primary.light,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.text.grey,
    borderRadius: '16px',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.common.white,
  },
}));
