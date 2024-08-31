import styled from 'styled-components';

interface IFontProps {
  $color?: 'white' | 'black' | 'grey';
}

export const StyledBody = styled.p<{ $color?: IFontProps['$color'] }>`
  font-family: ${({ theme }) => theme.typography.body.font};
  font-weight: ${({ theme }) => theme.typography.body.weight};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  letter-spacing: ${({ theme }) => theme.typography.body.letterSpacing};
  color: ${({ theme, $color }) =>
    $color === 'black'
      ? theme.palette.text.black
      : $color === 'grey'
        ? theme.palette.text.grey
        : theme.palette.text.white};
`;

export const StyledBodyBold = styled.p<{ $color?: IFontProps['$color'] }>`
  font-family: ${({ theme }) => theme.typography.bodyBold.font};
  font-weight: ${({ theme }) => theme.typography.bodyBold.weight};
  font-size: ${({ theme }) => theme.typography.bodyBold.fontSize};
  letter-spacing: ${({ theme }) => theme.typography.bodyBold.letterSpacing};
  color: ${({ theme, $color }) =>
    $color === 'black'
      ? theme.palette.text.black
      : $color === 'grey'
        ? theme.palette.text.grey
        : theme.palette.text.white};
`;

export const StyledHeaderS = styled.h3<{ $color?: IFontProps['$color'] }>`
  font-family: ${({ theme }) => theme.typography.headerS.font};
  font-weight: ${({ theme }) => theme.typography.headerS.weight};
  font-size: ${({ theme }) => theme.typography.headerS.fontSize};
  letter-spacing: ${({ theme }) => theme.typography.headerS.letterSpacing};
  color: ${({ theme, $color }) =>
    $color === 'black'
      ? theme.palette.text.black
      : $color === 'grey'
        ? theme.palette.text.grey
        : theme.palette.text.white};
`;

export const StyledHeaderM = styled.h2<{ $color?: IFontProps['$color'] }>`
  font-family: ${({ theme }) => theme.typography.headerM.font};
  font-weight: ${({ theme }) => theme.typography.headerM.weight};
  font-size: ${({ theme }) => theme.typography.headerM.fontSize};
  letter-spacing: ${({ theme }) => theme.typography.headerM.letterSpacing};
  color: ${({ theme, $color }) =>
    $color === 'black'
      ? theme.palette.text.black
      : $color === 'grey'
        ? theme.palette.text.grey
        : theme.palette.text.white};
`;

export const StyledHeaderL = styled.h1<{ $color?: IFontProps['$color'] }>`
  font-family: ${({ theme }) => theme.typography.headerL.font};
  font-weight: ${({ theme }) => theme.typography.headerL.weight};
  font-size: ${({ theme }) => theme.typography.headerL.fontSize};
  letter-spacing: ${({ theme }) => theme.typography.headerL.letterSpacing};
  color: ${({ theme, $color }) =>
    $color === 'black'
      ? theme.palette.text.black
      : $color === 'grey'
        ? theme.palette.text.grey
        : theme.palette.text.white};
`;
