import styled from 'styled-components';

export const StyledTopSection = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const StyledDeviceInformation = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledDeviceIconContainer = styled('div')<{ $backgroundColor: string }>`
  display: flex;
  justify-content: center;
  height: 48px;
  width: 48px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 50%;
`;
export const StyledDeviceName = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;
