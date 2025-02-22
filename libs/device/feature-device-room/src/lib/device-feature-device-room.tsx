import { useGetSingleRoom } from '@smart-home/device/data-access-room-list';
import { DeviceUiDeviceList } from '@smart-home/device/ui-device-list';
import { LoadingSpinner } from '@smart-home/shared/design-system';
import React from 'react';
import { useParams } from 'react-router-dom';

import { StyledDeviceFeatureDeviceRoom } from './device-feature-device-room.styled';

function DeviceFeatureDeviceRoom() {
  const params = useParams<{ id: string }>();
  const roomId = params.id ? +params.id : undefined;
  const { data: rooms, isLoading } = useGetSingleRoom(roomId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledDeviceFeatureDeviceRoom>
      <DeviceUiDeviceList roomsList={rooms || []} />
    </StyledDeviceFeatureDeviceRoom>
  );
}

export default DeviceFeatureDeviceRoom;
