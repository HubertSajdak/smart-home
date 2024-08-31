import { Icon, useMediaQuery } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton } from '@smart-home/shared/ui';
import React from 'react';

import { StyledSidebarButtonsSection } from './sidebar-buttons-section.styled';

const SidebarButtonsSection = () => {
  const isDesktop = useMediaQuery('desktopSize');
  return (
    <StyledSidebarButtonsSection>
      {isDesktop && (
        <IconButton color="primary.main" icon={<Icon name={'Bell'} />} onClick={() => console.log('elo')} />
      )}
      <IconButton color="primary.main" icon={<Icon name={'Power'} />} onClick={() => console.log('test')} />
    </StyledSidebarButtonsSection>
  );
};

export default SidebarButtonsSection;
