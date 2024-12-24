import styled from 'styled-components';

export const StyledChannelBar = styled('li')<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.palette.grey[30] : theme.palette.primary.main)};
  width: 100%;
  height: 48px;
  border-radius: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 2px solid ${({ $isActive, theme }) => ($isActive ? theme.palette.common.white : theme.palette.grey[30])};
`;
