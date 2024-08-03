import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StyledDividerDiv = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.palette.text.grey};
  margin-top: ${({ theme }) => theme.spacing(2)}
  flex-basis: 100%;
`;
