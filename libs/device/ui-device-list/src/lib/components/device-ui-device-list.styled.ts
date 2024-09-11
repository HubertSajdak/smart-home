import styled from 'styled-components';

export const StyledDeviceUiDeviceList = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;
