import { DeviceUiRoomList } from '@smart-home/device/ui-room-list';
import { useMediaQuery } from '@smart-home/shared/theme/smart-home-theme';
import { Typography } from '@smart-home/shared/ui';
import React from 'react';

import MobileBurgerMenu from './mobile-burger-menu';
import { StyledNavigation, StyledSidebar, StyledTitle } from './sidebar.styled';
import SidebarButtonsSection from './sidebar-buttons-section';
import SidebarNavigationList from './sidebar-navigation-list';

interface ISidebarProps {
  isSidebarOpen: boolean;
  onSidebarOpen: () => void;
}

const Sidebar = ({ isSidebarOpen, onSidebarOpen }: ISidebarProps) => {
  const isDesktop = useMediaQuery('desktopSize');
  return (
    <StyledSidebar>
      <StyledTitle>
        <Typography variant="headerM">Home</Typography>
        {!isDesktop && <MobileBurgerMenu isSidebarOpen={isSidebarOpen} onSidebarOpen={onSidebarOpen} />}
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
