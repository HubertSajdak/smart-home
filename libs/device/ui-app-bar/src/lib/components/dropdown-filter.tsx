import { SelectRootSlotProps } from '@mui/base';
import { useGetAllDeviceTypes } from '@smart-home/device/data-access-device-list';
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

const DropdownFilter = () => {
  const {
    updateDeviceTypeIdParam,
    queryParams: { deviceTypeId },
  } = useDeviceStore();
  const { data: deviceTypes } = useGetAllDeviceTypes();
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
      {deviceTypes &&
        deviceTypes.length > 0 &&
        deviceTypes.map(({ id, type }) => {
          return (
            <StyledOption key={id} value={id} onClick={() => changeDeviceTypeQuery(id)}>
              {type}
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
