import styled from 'styled-components';

export const StyledLayout = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '330px 1fr',
  height: '100vh',
}));
export const StyledLayoutContentWrapper = styled.main(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: `${theme.spacing(3.75)} ${theme.spacing(8.75)}`,
  gap: theme.spacing(5.75),
  display: 'flex',
  flexDirection: 'column',
}));
export const StyledLayoutSidebarWrapper = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'auto auto 1fr auto',
  gridGap: theme.spacing(3.75),
  padding: theme.spacing(3.75),
  backgroundColor: theme.palette.primary.light,
}));
