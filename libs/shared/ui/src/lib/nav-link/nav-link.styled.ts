import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavItem = styled.div(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  textTransform: 'capitalize',
  display: 'grid',
  alignItems: 'center',
  gap: theme.spacing(2.5),
  fontWeight: theme.typography.fontWeight.light,
  zIndex: 2,
  gridTemplateColumns: '16px auto',
  color: theme.palette.common.white,

  'a.active': {
    '&::before': {
      content: "''",
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      borderRadius: theme.spacing(7.5),
      position: 'absolute',
      top: 0,
      left: theme.spacing(-2.25),
      width: `calc(100% + ${theme.spacing(4.5)})`,
      height: '100%',
      zIndex: 1,
    },
  },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  textTransform: 'capitalize',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2.5),
  fontWeight: theme.typography.fontWeight.light,
  zIndex: 2,
  color: theme.palette.common.white,
  path: {
    fill: theme.palette.common.white,
  },
  '&.active': {
    color: theme.palette.common.black,
    path: {
      fill: theme.palette.common.black,
    },
    '&::before': {
      content: "''",
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.spacing(7.5),
      position: 'absolute',
      top: 0,
      left: theme.spacing(-2.25),
      width: `calc(100% + ${theme.spacing(4.5)})`,
      height: '100%',
      zIndex: -1,
    },
  },
}));
