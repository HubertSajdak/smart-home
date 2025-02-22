import React from 'react';

import { StyledChip } from './chip.styled';

interface IChipProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Chip = ({ label, onClick, isActive = false }: IChipProps) => {
  return (
    <StyledChip $isActive={isActive} onClick={onClick}>
      <span>{label}</span>
    </StyledChip>
  );
};

export default Chip;
