import { useGetRooms } from '@smart-home/device/data-access-room-list';
import { DeviceUiDeviceList } from '@smart-home/device/ui-device-list';
import { LoadingSpinner } from '@smart-home/shared/ui';
import React from 'react';

import { StyledDeviceFeatureDeviceDashboard } from './device-feature-device-dashboard.styled';

function DeviceFeatureDeviceDashboard() {
  const { data: rooms, isLoading } = useGetRooms();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <StyledDeviceFeatureDeviceDashboard>
      <DeviceUiDeviceList roomsList={rooms || []} />
    </StyledDeviceFeatureDeviceDashboard>
  );
}

export default DeviceFeatureDeviceDashboard;
