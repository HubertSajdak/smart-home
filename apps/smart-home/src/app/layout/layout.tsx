import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './components/sidebar';
import { StyledLayout, StyledLayoutContentWrapper, StyledLayoutSidebarWrapper } from './layout.styled';

const Layout = () => {
  return (
    <StyledLayout>
      <StyledLayoutSidebarWrapper>
        <Sidebar />
      </StyledLayoutSidebarWrapper>
      <StyledLayoutContentWrapper>
        <Outlet />
      </StyledLayoutContentWrapper>
    </StyledLayout>
  );
};

export default Layout;
