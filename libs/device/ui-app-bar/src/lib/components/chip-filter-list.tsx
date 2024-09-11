import React from 'react';

import Chip from './chip';
import { StyledChipFilterList } from './chip-filter-list.styled';

const chipFilterConfig = [
  {
    id: 0,
    label: 'Security',
  },
  {
    id: 1,
    label: 'Media device',
  },
  {
    id: 2,
    label: 'Lights',
  },
  {
    id: 4,
    label: 'Temperature',
  },
];
const ChipFilterList = () => {
  return (
    <StyledChipFilterList>
      {chipFilterConfig.map((el) => {
        return <Chip key={el.id} label={el.label} />;
      })}
    </StyledChipFilterList>
  );
};

export default ChipFilterList;
