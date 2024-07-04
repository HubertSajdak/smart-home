import React from 'react';

import { StyledNavigation, StyledSidebar, StyledTitle } from './sidebar.styled';
import SidebarNavigationList from './sidebar-navigation-list';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledTitle>Home</StyledTitle>
      <SidebarNavigationList />
      <StyledNavigation></StyledNavigation>
    </StyledSidebar>
  );
};

export default Sidebar;
