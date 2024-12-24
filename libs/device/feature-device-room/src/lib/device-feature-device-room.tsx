import { useGetSingleRoom } from '@smart-home/device/data-access-room-list';
import { DeviceUiDeviceList } from '@smart-home/device/ui-device-list';
import { useParams } from 'react-router-dom';

import { StyledDeviceFeatureDeviceRoom } from './device-feature-device-room.styled';

function DeviceFeatureDeviceRoom() {
  const params = useParams<{ id: string }>();
  const roomId = params.id ? +params.id : undefined;
  const { data: rooms } = useGetSingleRoom(roomId);
  return (
    <StyledDeviceFeatureDeviceRoom>
      <DeviceUiDeviceList roomsList={rooms || []} />
    </StyledDeviceFeatureDeviceRoom>
  );
}

export default DeviceFeatureDeviceRoom;
