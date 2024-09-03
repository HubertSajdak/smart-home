import ChipFilterList from './components/chip-filter-list';
import DropdownFilter from './components/dropdown-filter';
import Tabs from './components/tabs';
import { StyledAppBar, StyledDiv } from './device-ui-app-bar.styled';

export function DeviceUiAppBar() {
  return (
    <StyledAppBar>
      <ChipFilterList />
      <StyledDiv>
        <DropdownFilter />
        <Tabs />
      </StyledDiv>
    </StyledAppBar>
  );
}

export default DeviceUiAppBar;
