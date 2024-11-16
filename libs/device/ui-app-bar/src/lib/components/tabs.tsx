import { Tabs as MuiTabs } from '@mui/base';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { useDeviceStore } from '@smart-home/shared/utils/store';
import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';

import { StyledTab, StyledTabsList } from './tabs.styled';

function Tabs() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<'grid' | 'row'>('grid');
  const { changeDeviceListDisplayType } = useDeviceStore();
  const selectActiveTab = () => {
    if (activeTab === 'grid') {
      setActiveTab('row');
      changeDeviceListDisplayType('row');
    } else {
      setActiveTab('grid');
      changeDeviceListDisplayType('grid');
    }
  };
  const IconColor = useCallback(
    (type: 'grid' | 'row') => (activeTab === type ? theme.palette.common.black : theme.palette.common.white),
    [activeTab, theme]
  );

  return (
    <MuiTabs value={activeTab} onChange={() => selectActiveTab()}>
      <StyledTabsList>
        <StyledTab value={'grid'}>
          <Icon height={24} width={24} name={'Window'} color={IconColor('grid')} />
        </StyledTab>
        <StyledTab value={'row'}>
          <Icon height={24} width={24} name={'TableRowsNarrow'} color={IconColor('row')} />
        </StyledTab>
      </StyledTabsList>
    </MuiTabs>
  );
}

export default Tabs;
