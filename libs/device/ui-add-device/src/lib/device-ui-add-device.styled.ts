import styled from 'styled-components';

export const StyledAddDeviceBackground = styled('div')`
  background-color: rgba(0, 0, 0, 0.14);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const StyledAddDeviceModalContent = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.light};
  width: 350px;
  border-radius: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(4)};
  z-index: 1;
`;
export const StyledCloseIconContainer = styled('div')`
  position: absolute;
  right: 0;
  top: 0;
  margin: ${({ theme }) => theme.spacing(2, 2)};
  cursor: pointer;
`;
export const StyledOpenModalContainer = styled('div')`
  position: absolute;
  right: 0;
  top: 0;
`;
