import { SelectRootSlotProps } from '@mui/base';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { useDeviceStore } from '@smart-home/shared/utils/store';
import React from 'react';
import { useTheme } from 'styled-components';

import {
  StyledButton,
  StyledDivIcon,
  StyledListbox,
  StyledOption,
  StyledPopup,
  StyledSelect,
} from './dropdown-filter.styled';

interface IOption {
  label: string;
  value: number;
}
interface IDropdownFilterProps {
  options: IOption[];
}
const DropdownFilter = ({ options }: IDropdownFilterProps) => {
  const {
    updateDeviceTypeIdParam,
    queryParams: { deviceTypeId },
  } = useDeviceStore();
  const changeDeviceTypeQuery = async (deviceTypeId: number) => {
    updateDeviceTypeIdParam(deviceTypeId);
  };
  return (
    <StyledSelect
      slots={{
        root: CustomButton,
        listbox: StyledListbox,
        popup: StyledPopup,
      }}
      defaultValue={0}
      id={'device-filter'}
      name={'device-filter'}
      value={deviceTypeId}
    >
      {options &&
        options.length > 0 &&
        options.map(({ label, value }) => {
          return (
            <StyledOption key={value} value={value} onClick={() => changeDeviceTypeQuery(value)}>
              {label}
            </StyledOption>
          );
        })}
    </StyledSelect>
  );
};

export default DropdownFilter;

const CustomButton = React.forwardRef(function CustomButton<
  TValue extends NonNullable<unknown>,
  Multiple extends boolean,
>(props: SelectRootSlotProps<TValue, Multiple>, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { ownerState, ...other } = props;
  const theme = useTheme();
  return (
    <StyledButton type="button" {...other} ref={ref}>
      <span>{other.children}</span>
      <StyledDivIcon>
        <Icon height={10} width={10} name={'ArrowDropDown'} color={theme.palette.common.white} />
      </StyledDivIcon>
    </StyledButton>
  );
});
