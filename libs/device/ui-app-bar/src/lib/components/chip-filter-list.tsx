import { useGetAllDeviceTypes } from '@smart-home/device/data-access-device-list';
import { useDeviceStore } from '@smart-home/shared/utils/store';
import React from 'react';

import Chip from './chip';
import { StyledChipFilterList } from './chip-filter-list.styled';

const ChipFilterList = () => {
  const { data: allDeviceTypes } = useGetAllDeviceTypes();
  const {
    updateDeviceTypeIdParam,
    queryParams: { deviceTypeId },
  } = useDeviceStore();
  const changeDeviceTypeQuery = async (typeId: number) => {
    updateDeviceTypeIdParam(typeId);
  };
  return (
    <StyledChipFilterList>
      {allDeviceTypes &&
        allDeviceTypes.map((el) => {
          return (
            <Chip
              key={el.id}
              label={el.type}
              isActive={deviceTypeId === el.id}
              onClick={() => changeDeviceTypeQuery(el.id)}
            />
          );
        })}
    </StyledChipFilterList>
  );
};

export default ChipFilterList;
