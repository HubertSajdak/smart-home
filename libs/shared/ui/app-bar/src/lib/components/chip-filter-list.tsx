import { useDeviceStore } from '@smart-home/shared/utils/store';
import React from 'react';

import Chip from './chip';
import { StyledChipFilterList } from './chip-filter-list.styled';

interface IChip {
  id: number;
  label: string;
}
interface IChipFilterListProps {
  chips: IChip[];
}
const ChipFilterList = ({ chips }: IChipFilterListProps) => {
  const {
    updateDeviceTypeIdParam,
    queryParams: { deviceTypeId },
  } = useDeviceStore();
  const changeDeviceTypeQuery = async (typeId: number) => {
    updateDeviceTypeIdParam(typeId);
  };
  return (
    <StyledChipFilterList>
      {chips &&
        chips.map((el) => {
          return (
            <Chip
              key={el.id}
              label={el.label}
              isActive={deviceTypeId === el.id}
              onClick={() => changeDeviceTypeQuery(el.id)}
            />
          );
        })}
    </StyledChipFilterList>
  );
};

export default ChipFilterList;
