import { IRoomsList } from '@smart-home/device/data-access-room-list';
import { DeviceUiAddDeviceModal } from '@smart-home/device/ui-add-device';
import React from 'react';

import DeviceSection from './components/device-section';
import { StyledDeviceUiDeviceList } from './device-ui-device-list.styled';

interface IDeviceUiDeviceListProps {
  roomsList: IRoomsList[];
}

function DeviceUiDeviceList({ roomsList }: IDeviceUiDeviceListProps) {
  return (
    <StyledDeviceUiDeviceList>
      <DeviceUiAddDeviceModal />
      {roomsList && roomsList.map(({ id, label }) => <DeviceSection key={id} roomId={id} roomLabel={label} />)}
    </StyledDeviceUiDeviceList>
  );
}

export default DeviceUiDeviceList;
