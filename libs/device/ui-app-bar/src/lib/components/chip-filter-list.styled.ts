import styled from 'styled-components';

export const StyledChipFilterList = styled.div`
  display: inline-flex;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing(1)};
  padding-bottom: 10px;
  max-width: calc(100vw - 10vw);

  &::-webkit-scrollbar {
    width: 0;
    border-radius: 100px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 100px;
    background: ${({ theme }) => theme.palette.primary.light};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: ${({ theme }) => theme.palette.text.grey};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.common.white};
  }
`;
