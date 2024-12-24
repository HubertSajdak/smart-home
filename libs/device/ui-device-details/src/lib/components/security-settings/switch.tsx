import { Switch as MuiSwitch } from '@mui/base';
import React from 'react';

import { StyledSwitchRoot } from './switch.styled';

interface ISwitchProps {
  onClick: () => void;
  checked: boolean;
}

const Switch = ({ onClick, checked }: ISwitchProps) => {
  return <MuiSwitch onClick={onClick} checked={checked} slots={{ root: StyledSwitchRoot }} />;
};

export default Switch;
