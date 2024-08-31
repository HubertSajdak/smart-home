import { ReactNode } from 'react';

import { StyledBody, StyledBodyBold, StyledHeaderL, StyledHeaderM, StyledHeaderS } from './typography.styled';

interface ITypographyProps {
  variant?: 'body' | 'bodyBold' | 'headerS' | 'headerM';
  color?: 'white' | 'black' | 'grey';
  children: ReactNode;
}

export function Typography({ variant, children, color = 'white' }: ITypographyProps) {
  if (variant === 'body') {
    return <StyledBody $color={color}>{children}</StyledBody>;
  }
  if (variant === 'bodyBold') {
    return <StyledBodyBold $color={color}>{children}</StyledBodyBold>;
  }
  if (variant === 'headerS') {
    return <StyledHeaderS $color={color}>{children}</StyledHeaderS>;
  }
  if (variant === 'headerM') {
    return <StyledHeaderM color={color}>{children}</StyledHeaderM>;
  }
  if (variant === 'headerL') {
    return <StyledHeaderL color={color}>{children}</StyledHeaderL>;
  }

  return <p>{children}</p>;
}
