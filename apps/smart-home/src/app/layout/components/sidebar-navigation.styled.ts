import styled from 'styled-components';

export const StyledNavigationList = styled.nav(({ theme }) => ({
  gap: theme.spacing(0.875),
  display: 'grid',
  padding: `0 ${theme.spacing(4)}`,
}));
