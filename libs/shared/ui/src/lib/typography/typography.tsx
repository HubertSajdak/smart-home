import { ReactNode } from 'react';

import {
  StyledBody,
  StyledBodyBold,
  StyledHeaderL,
  StyledHeaderM,
  StyledHeaderS,
  StyledParagraph,
} from './typography.styled';

interface ITypographyProps {
  variant?: 'body' | 'bodyBold' | 'headerS' | 'headerM';
  color?: 'light' | 'dark' | 'grey';
  children: ReactNode;
  capitalize?: boolean;
}

export function Typography({ variant, children, capitalize, color = 'light' }: ITypographyProps) {
  if (variant === 'body') {
    return (
      <StyledBody $color={color} capitalize={capitalize}>
        {children}
      </StyledBody>
    );
  }
  if (variant === 'bodyBold') {
    return (
      <StyledBodyBold $color={color} capitalize={capitalize}>
        {children}
      </StyledBodyBold>
    );
  }
  if (variant === 'headerS') {
    return (
      <StyledHeaderS $color={color} capitalize={capitalize}>
        {children}
      </StyledHeaderS>
    );
  }
  if (variant === 'headerM') {
    return (
      <StyledHeaderM $color={color} capitalize={capitalize}>
        {children}
      </StyledHeaderM>
    );
  }
  if (variant === 'headerL') {
    return (
      <StyledHeaderL $color={color} capitalize={capitalize}>
        {children}
      </StyledHeaderL>
    );
  }
  return (
    <StyledParagraph $color={color} capitalize={capitalize}>
      {children}
    </StyledParagraph>
  );
}
