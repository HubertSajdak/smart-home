import styled from 'styled-components';

export const StyledDeviceRow = styled('div')<{ $color: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  background-color: ${({ $color }) => $color};
  padding: ${({ theme }) => theme.spacing(1.2)};
  border-radius: ${({ theme }) => theme.spacing(3)};
  cursor: pointer;
`;
export const StyledIconBackground = styled('div')<{ $lightColor?: { color: number; intensity: number } }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $lightColor }) =>
    $lightColor ? `hsl(${$lightColor.color} 100 50 / ${$lightColor.intensity})` : theme.palette.common.white};
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

export const StyledCardInformation = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledOpenDetailsIcon = styled('div')`
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
`;
