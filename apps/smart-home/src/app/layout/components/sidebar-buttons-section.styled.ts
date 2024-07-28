import styled from 'styled-components';

export const StyledSidebarButtonsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
`;
