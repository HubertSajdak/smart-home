import { HomeIcon, SettingsIcon } from '@smart-home/shared/assets';
import { NavLink } from '@smart-home/shared/ui/nav-link';
import React from 'react';

import { StyledNavigationList } from './sidebar-navigation.styled';

const navigationLinks = [
  {
    icon: <HomeIcon />,
    label: 'dashboard',
    path: '/device-list',
  },
  {
    icon: <SettingsIcon />,
    label: 'settings',
    path: '/settings',
  },
];
const SidebarNavigationList = () => {
  return (
    <StyledNavigationList>
      {navigationLinks.map(({ label, path, icon }) => {
        return <NavLink key={label} icon={icon} label={label} path={path} />;
      })}
    </StyledNavigationList>
  );
};

export default SidebarNavigationList;
