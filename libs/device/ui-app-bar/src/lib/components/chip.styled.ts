import styled from 'styled-components';

export const StyledChip = styled.div`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.palette.text.grey};
  border-radius: 100px;
  padding: ${({ theme }) => theme.spacing(1, 1.5)};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme }) => theme.palette.text.light};
  cursor: pointer;
  height: 36px;
  text-wrap: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
