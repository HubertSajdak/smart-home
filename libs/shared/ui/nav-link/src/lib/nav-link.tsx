import React, { ReactNode } from 'react';

import { StyledNavLink } from './nav-link.styled';

interface INavLinkProps {
  label: string;
  path: string;
  icon?: ReactNode;
}

export const NavLink = ({ label, path, icon }: INavLinkProps) => {
  return (
    <StyledNavLink to={path}>
      {icon && icon} <span>{label}</span>
    </StyledNavLink>
  );
};
