import React from 'react';

import HomeIcon from '../../../assets/home-health.svg';
import NavItem from './nav-item';
import { StyledNavigationList } from './sidebar-navigation.styled';

const navigationLinks = [
  {
    icon: <HomeIcon />,
    label: 'dashboard',
    path: '/device-list',
  },
  {
    icon: <HomeIcon />,
    label: 'settings',
    path: '/',
  },
];
const SidebarNavigationList = () => {
  return (
    <StyledNavigationList>
      {navigationLinks.map(({ label, path, icon }) => {
        return <NavItem key={label} icon={icon} label={label} path={path} />;
      })}
    </StyledNavigationList>
  );
};

export default SidebarNavigationList;
