import styled from 'styled-components';

export const StyledRoomInput = styled.div(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  paddingBottom: theme.spacing(0.5),
  fontWeight: theme.typography.fontWeight.light,
  marginBottom: theme.spacing(1),
  height: '48px',
  a: {
    zIndex: 100,
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(2.5),
  },
  color: theme.palette.common.white,
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    outline: 'none',
    height: '48px',
    width: '120px',
    [`@media (max-width:${theme.screen.isDesktop})`]: {
      width: '100%',
    },
    [`@media (max-width:${theme.screen.isTablet})`]: {
      width: '100%',
    },
  },
}));

export const StyledDoneIconContainer = styled('div')`
  margin-left: auto;
`;
