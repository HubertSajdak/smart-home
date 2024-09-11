import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton } from '@smart-home/shared/ui';
import React from 'react';
import { useTheme } from 'styled-components';

import { StyledMobileBurgerMenu } from './mobile-burger-menu.styled';

const MobileBurgerMenu = ({ isSidebarOpen, onSidebarOpen }: { isSidebarOpen: boolean; onSidebarOpen: () => void }) => {
  const theme = useTheme();
  return (
    <StyledMobileBurgerMenu>
      <IconButton
        color="black"
        icon={<Icon name={'Bell'} color={theme.palette.common.white} />}
        onClick={onSidebarOpen}
      />
      <IconButton
        color="white"
        icon={isSidebarOpen ? <Icon name={'Close'} /> : <Icon name={'BurgerMenu'} color={theme.palette.common.black} />}
        onClick={onSidebarOpen}
      />
    </StyledMobileBurgerMenu>
  );
};

export default MobileBurgerMenu;
