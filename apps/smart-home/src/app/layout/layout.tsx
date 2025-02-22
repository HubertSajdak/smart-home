import { DeviceUiDeviceDetails } from '@smart-home/device/ui-device-details';
import { useMediaQuery } from '@smart-home/shared/theme/smart-home-theme';
import { AppBar } from '@smart-home/shared/ui/app-bar';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import MobileBurgerMenu from './components/mobile-burger-menu';
import Sidebar from './components/sidebar';
import { StyledLayout, StyledLayoutContentWrapper, StyledLayoutSidebarWrapper } from './layout.styled';

const Layout = () => {
  const { isSettingsWindowOpen } = useDeviceSettingsStore();
  const isDesktop = useMediaQuery('desktopSize');
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebarOpen = () => setIsOpen((prev) => !prev);
  return (
    <StyledLayout>
      <StyledLayoutSidebarWrapper $isSidebarOpen={isOpen}>
        <Sidebar isSidebarOpen={isOpen} onSidebarOpen={handleSidebarOpen} />
      </StyledLayoutSidebarWrapper>
      <StyledLayoutContentWrapper>
        {isSettingsWindowOpen && <DeviceUiDeviceDetails />}
        {!isDesktop && <MobileBurgerMenu isSidebarOpen={isOpen} onSidebarOpen={handleSidebarOpen} />}
        <AppBar />
        <Outlet />
      </StyledLayoutContentWrapper>
    </StyledLayout>
  );
};

export default Layout;
