import { Select, SelectRootSlotProps } from '@mui/base';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React from 'react';
import { useTheme } from 'styled-components';

import { StyledButton, StyledDivIcon, StyledListbox, StyledOption, StyledPopup } from './dropdown-filter.styled';

const DropdownFilter = () => {
  return (
    <Select
      slots={{
        root: CustomButton,
        listbox: StyledListbox,
        popup: StyledPopup,
      }}
      defaultValue={0}
      id={'device-filter'}
      name={'device-filter'}
    >
      <StyledOption value={0}>All</StyledOption>
      <StyledOption value={1}>Security</StyledOption>
      <StyledOption value={2}>Lights</StyledOption>
      <StyledOption value={3}>Media device</StyledOption>
    </Select>
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
