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
    height: '48px',
    display: 'grid',
    gridTemplateColumns: '16px 140px 16px',
    alignItems: 'center',
    gap: theme.spacing(2.5),
    '@media (max-width:1440px)': {
      gridTemplateColumns: '16px 220px 16px',
    },
    '@media (max-width:965px)': {
      gridTemplateColumns: '16px auto 16px',
    },
  },
  color: theme.palette.common.white,
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    outline: 'none',
    width: '120px',
    '@media (max-width:1440px)': {
      width: '220px',
    },
    '@media (max-width:965px)': {
      width: '100%',
    },
  },
}));
