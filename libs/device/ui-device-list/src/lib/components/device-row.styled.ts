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
`;
export const StyledIconBackground = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.white};
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

export const StyledCardInformation = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
