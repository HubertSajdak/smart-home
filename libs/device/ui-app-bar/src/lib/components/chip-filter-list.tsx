import { useGetAllDeviceTypes } from '@smart-home/device/data-access-device-list';
import { useDeviceStore } from '@smart-home/shared/utils/store';
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
  const { data: allDeviceTypes } = useGetAllDeviceTypes();
  const {
    updateDeviceTypeIdParam,
    queryParams: { deviceTypeId },
  } = useDeviceStore();
  const changeDeviceTypeQuery = async (deviceTypeId?: number) => {
    updateDeviceTypeIdParam(deviceTypeId);
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
