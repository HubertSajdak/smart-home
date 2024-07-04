import React, { ReactNode } from 'react';

import { StyledNavItem, StyledNavLink } from './nav-item.styled';

interface INavItemProps {
  label: string;
  path: string;
  icon: ReactNode;
}

const NavItem = ({ label, path, icon }: INavItemProps) => {
  return (
    <StyledNavItem>
      {icon}
      <StyledNavLink to={path}>{label}</StyledNavLink>
    </StyledNavItem>
  );
};

export default NavItem;
