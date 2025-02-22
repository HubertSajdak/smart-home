import { buttonClasses, Tab as BaseTab, tabClasses, TabsList as BaseTabsList } from '@mui/base';
import styled from 'styled-components';

export const StyledTab = styled(BaseTab)`
  cursor: pointer;
  background-color: transparent;
  height: 36px;
  width: 100%;
  border: none;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;


  &:focus {
    color: ${({ theme }) => theme.palette.common.white};
  }
;
}

&.${tabClasses.selected} {
  background-color: ${({ theme }) => theme.palette.common.white};
}

&.${buttonClasses.disabled} {
  opacity: 0.5;
  cursor: not-allowed;
}
`;

export const StyledTabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 100px;
  background-color: ${theme.palette.grey[30]};
  border-radius:100px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `
);
