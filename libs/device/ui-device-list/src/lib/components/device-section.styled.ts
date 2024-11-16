import styled from 'styled-components';

export const StyledDeviceSection = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;
export const StyledDeviceList = styled('div')<{ $displayType: 'grid' | 'row' }>`
  display: flex;
  flex-direction: ${({ $displayType }) => ($displayType === 'grid' ? 'row' : 'column')};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: flex-start;
  align-items: center;
`;
