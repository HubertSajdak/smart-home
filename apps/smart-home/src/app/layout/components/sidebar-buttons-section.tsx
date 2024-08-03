import { BellIcon, PowerIcon } from '@smart-home/shared/assets';
import { IconButton } from '@smart-home/shared/ui/icon-button';
import { useMediaQuery } from '@smart-home/shared/utils/hooks';
import React from 'react';

import { StyledSidebarButtonsSection } from './sidebar-buttons-section.styled';

const SidebarButtonsSection = () => {
  const isDesktop = useMediaQuery('desktopSize');
  return (
    <StyledSidebarButtonsSection>
      {isDesktop && <IconButton color="primary.main" icon={<BellIcon />} onClick={() => console.log('elo')} />}
      <IconButton color="primary.main" icon={<PowerIcon />} onClick={() => console.log('test')} />
    </StyledSidebarButtonsSection>
  );
};

export default SidebarButtonsSection;
