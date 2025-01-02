import { Icon, useMediaQuery } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton } from '@smart-home/shared/ui';
import React from 'react';
import { useTheme } from 'styled-components';

import { StyledSidebarButtonsSection } from './sidebar-buttons-section.styled';

const SidebarButtonsSection = () => {
  const isDesktop = useMediaQuery('desktopSize');
  const theme = useTheme();
  return (
    <StyledSidebarButtonsSection>
      {isDesktop && (
        <IconButton
          color="primary.main"
          icon={<Icon name={'Bell'} color={theme.palette.common.white} />}
          onClick={() => console.log('test1')}
        />
      )}
      <IconButton
        color="primary.main"
        icon={<Icon name={'Power'} color={theme.palette.common.white} />}
        onClick={() => console.log('test2')}
      />
    </StyledSidebarButtonsSection>
  );
};

export default SidebarButtonsSection;
