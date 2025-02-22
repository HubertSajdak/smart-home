import styled from 'styled-components';

export const StyledChip = styled.div<{ $isActive?: boolean }>`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.palette.text.grey};
  border-radius: 100px;
  padding: ${({ theme }) => theme.spacing(1, 1.5)};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  color: ${({ theme, $isActive }) => ($isActive ? theme.palette.text.dark : theme.palette.text.light)};
  cursor: pointer;
  height: 36px;
  text-wrap: nowrap;
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.palette.common.white : 'transparent')};

  &:hover {
    background-color: ${({ theme, $isActive }) => !$isActive && theme.palette.primary.light};
  }
`;
