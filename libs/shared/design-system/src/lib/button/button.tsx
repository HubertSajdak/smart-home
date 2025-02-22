import { ButtonProps as MuiButtonProps } from '@mui/base';
import React, { ReactNode } from 'react';

import { StyledButton } from './button.styled';

interface IButtonProps extends MuiButtonProps {
  children: ReactNode;
}

export const Button = ({ children, ...restProps }: IButtonProps) => {
  return <StyledButton {...restProps}>{children}</StyledButton>;
};
