import { Icon, useMediaQuery } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton } from '@smart-home/shared/ui';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './components/sidebar';
import { StyledLayout, StyledLayoutContentWrapper, StyledLayoutSidebarWrapper } from './layout.styled';

const Layout = () => {
  const isDesktop = useMediaQuery('desktopSize');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledLayout>
      <StyledLayoutSidebarWrapper $isSidebarOpen={isOpen}>
        <Sidebar />
      </StyledLayoutSidebarWrapper>
      <StyledLayoutContentWrapper>
        <Outlet />
      </StyledLayoutContentWrapper>
      {!isDesktop && (
        <div style={{ display: 'flex', gap: '16px', position: 'fixed', top: '24px', right: '24px' }}>
          <IconButton color="black" icon={<Icon name={'Bell'} />} onClick={() => setIsOpen((prev) => !prev)} />
          <IconButton
            color="white"
            icon={isOpen ? <Icon name={'Close'} /> : <Icon name={'BurgerMenu'} />}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      )}
    </StyledLayout>
  );
};

export default Layout;
