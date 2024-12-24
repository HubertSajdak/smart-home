import styled from 'styled-components';

export const StyledDeviceDetails = styled('div')`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  top: 16px;
  right: 16px;
  width: 350px;
  height: 650px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(3)};
`;
