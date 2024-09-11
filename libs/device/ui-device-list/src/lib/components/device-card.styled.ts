import styled from 'styled-components';

export const StyledDeviceCard = styled('div')<{ $color: string }>`
  width: 192px;
  height: 166px;
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ $color }) => $color};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
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
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;
