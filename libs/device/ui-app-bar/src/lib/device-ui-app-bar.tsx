import ChipFilterList from './components/chip-filter-list';
import DropdownFilter from './components/dropdown-filter';
import Tabs from './components/tabs';
import { FiltersTabsSection, StyledAppBar } from './device-ui-app-bar.styled';

export function DeviceUiAppBar() {
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

export default DeviceUiAppBar;
