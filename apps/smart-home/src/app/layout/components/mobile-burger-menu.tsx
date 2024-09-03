import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton } from '@smart-home/shared/ui';
import React from 'react';

import { StyledMobileBurgerMenu } from './mobile-burger-menu.styled';

const MobileBurgerMenu = ({ isSidebarOpen, onSidebarOpen }: { isSidebarOpen: boolean; onSidebarOpen: () => void }) => {
  return (
    <StyledMobileBurgerMenu>
      <IconButton color="black" icon={<Icon name={'Bell'} />} onClick={onSidebarOpen} />
      <IconButton
        color="white"
        icon={isSidebarOpen ? <Icon name={'Close'} /> : <Icon name={'BurgerMenu'} />}
        onClick={onSidebarOpen}
      />
    </StyledMobileBurgerMenu>
  );
};

export default MobileBurgerMenu;
