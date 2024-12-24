import { useGetRooms } from '@smart-home/device/data-access-room-list';
import { DeviceUiDeviceList } from '@smart-home/device/ui-device-list';
import React from 'react';

import { StyledDeviceFeatureDeviceDashboard } from './device-feature-device-dashboard.styled';

function DeviceFeatureDeviceDashboard() {
  const { data: rooms } = useGetRooms();
  return (
    <StyledDeviceFeatureDeviceDashboard>
      <DeviceUiDeviceList roomsList={rooms || []} />
    </StyledDeviceFeatureDeviceDashboard>
  );
}

export default DeviceFeatureDeviceDashboard;
