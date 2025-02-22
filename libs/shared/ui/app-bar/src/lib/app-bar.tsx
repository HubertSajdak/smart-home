import { Tabs } from '@mui/base';

import { FiltersTabsSection, StyledAppBar } from './app-bar.styled';
import ChipFilterList from './components/chip-filter-list';
import DropdownFilter from './components/dropdown-filter';

export interface IDeviceType {
  id: number;
  type: string;
}
interface IAppBarProps {
  deviceTypeList: IDeviceType[];
}
export function AppBar({ deviceTypeList }: IAppBarProps) {
  const chipsMapping = deviceTypeList.map(({ id, type }) => ({
    id: id,
    label: type,
  }));

  const optionsMapping = deviceTypeList.map(({ id, type }) => ({ label: type, value: id }));

  return (
    <StyledAppBar>
      <ChipFilterList chips={chipsMapping} />
      <FiltersTabsSection>
        <DropdownFilter options={optionsMapping || []} />
        <Tabs />
      </FiltersTabsSection>
    </StyledAppBar>
  );
}

export default AppBar;
