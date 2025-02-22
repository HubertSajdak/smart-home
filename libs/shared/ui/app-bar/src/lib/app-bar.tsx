import { Tabs } from '@mui/base';

import { FiltersTabsSection, StyledAppBar } from './app-bar.styled';
import ChipFilterList from './components/chip-filter-list';
import DropdownFilter from './components/dropdown-filter';

export function AppBar() {
  return (
    <StyledAppBar>
      <ChipFilterList />
      <FiltersTabsSection>
        <DropdownFilter />
        <Tabs />
      </FiltersTabsSection>
    </StyledAppBar>
  );
}

export default AppBar;
