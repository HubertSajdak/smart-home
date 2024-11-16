import { InputProps as MuiInputProps } from '@mui/base';
import React, { forwardRef, Ref } from 'react';

import { StyledInput } from './input.styled';

type TInputProps = MuiInputProps;

export const Input = forwardRef((props: TInputProps, ref: Ref<HTMLInputElement>) => {
  return <StyledInput ref={ref} {...props} />;
});
