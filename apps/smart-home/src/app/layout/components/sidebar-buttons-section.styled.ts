import styled from 'styled-components';

export const StyledSidebarButtonsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100px;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: auto;
`;
