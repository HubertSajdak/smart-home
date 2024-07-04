import styled from 'styled-components';

export const StyledSidebar = styled.aside(() => ({
  gap: '30px',
  display: 'flex',
  flexDirection: 'column',
}));
export const StyledTitle = styled.div(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: theme.typography.fontSize.large,
}));
export const StyledNavigation = styled.div(({ theme }) => ({}));
