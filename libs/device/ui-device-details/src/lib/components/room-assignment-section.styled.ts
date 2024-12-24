import styled from 'styled-components';

export const StyledRoomAssignmentSection = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledDividerDiv = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.grey[30]};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  flex-basis: 100%;
`;
