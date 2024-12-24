import styled from 'styled-components';

export const StyledChannelList = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  height: 250px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    padding-left: ${({ theme }) => theme.spacing(2)};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.primary.light};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.text.grey};
    border-radius: ${({ theme }) => theme.spacing(2)};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.common.white};
  }
`;
