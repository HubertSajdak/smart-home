import React from 'react';

import { StyledChip } from './chip.styled';

const Chip = ({ label }: { label: string }) => {
  return (
    <StyledChip>
      <span>{label}</span>
    </StyledChip>
  );
};

export default Chip;
