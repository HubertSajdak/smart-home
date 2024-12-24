import { SelectProps, SelectRootSlotProps } from '@mui/base';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React, { ReactNode, useEffect } from 'react';
import { useTheme } from 'styled-components';

import { StyledButton, StyledDivIcon, StyledListbox, StyledOption, StyledPopup, StyledSelect } from './select.styled';

interface IOptionProps {
  value: string | number;
  label: ReactNode;
}

interface ISelectProps extends SelectProps<NonNullable<unknown>, boolean> {
  optionsList: IOptionProps[];
  variant?: 'text' | 'input';
}

export const Select = React.forwardRef((props: ISelectProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { optionsList, variant = 'input' } = props;
  const customButton = variant === 'input' ? CustomInputButton : CustomTextButton;
  useEffect(() => {
    console.log(customButton);
  }, [customButton]);
  const slots = {
    root: customButton,
    listbox: StyledListbox,
    popup: StyledPopup,
  };

  return (
    <StyledSelect {...props} ref={ref} slots={slots} variant={variant}>
      {optionsList.map(({ value, label }) => (
        <Option value={value} label={label} />
      ))}
    </StyledSelect>
  );
});

const Option = React.forwardRef(({ value, label }: IOptionProps, ref: React.ForwardedRef<HTMLOptionElement>) => {
  return (
    <StyledOption value={value} ref={ref}>
      {label}
    </StyledOption>
  );
});

type TCustomButtonProps = SelectRootSlotProps<NonNullable<unknown>, boolean>;

const CustomInputButton = React.forwardRef((props: TCustomButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { ownerState, ...other } = props;
  const theme = useTheme();
  return (
    <StyledButton type="button" variant={'input'} {...other} ref={ref}>
      <span>{other.children}</span>
      <StyledDivIcon>
        <Icon height={10} width={10} name={'ArrowDropDown'} color={theme.palette.common.white} />
      </StyledDivIcon>
    </StyledButton>
  );
});

const CustomTextButton = React.forwardRef((props: TCustomButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { ownerState, ...other } = props;
  const theme = useTheme();
  return (
    <StyledButton type="button" {...other} ref={ref} variant={'text'}>
      <span>{other.children}</span>
      <StyledDivIcon>
        <Icon height={10} width={10} name={'ArrowDropDown'} color={theme.palette.common.white} />
      </StyledDivIcon>
    </StyledButton>
  );
});
