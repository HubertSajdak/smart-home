import { DeviceUiRoomList } from '@smart-home/device/ui-room-list';
import { Typography } from '@smart-home/shared/ui';
import React from 'react';

import { StyledNavigation, StyledSidebar, StyledTitle } from './sidebar.styled';
import SidebarButtonsSection from './sidebar-buttons-section';
import SidebarNavigationList from './sidebar-navigation-list';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledTitle>
        <Typography variant="headerM">Home</Typography>
      </StyledTitle>
      <SidebarNavigationList />
      <StyledNavigation>
        <DeviceUiRoomList />
      </StyledNavigation>
      <SidebarButtonsSection />
    </StyledSidebar>
  );
};

export default Sidebar;
