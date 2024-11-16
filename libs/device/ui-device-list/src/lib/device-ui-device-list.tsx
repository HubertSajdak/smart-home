import { useGetAllDevices } from '@smart-home/device/data-access-device-list';
import { useGetRooms } from '@smart-home/device/data-access-room-list';
import { DeviceUiAddDeviceModal } from '@smart-home/device/ui-add-device';
import { useDeviceStore } from '@smart-home/shared/utils/store';
import { useParams } from 'react-router-dom';

import DeviceSection from './components/device-section';
import { StyledDeviceUiDeviceList } from './device-ui-device-list.styled';

function DeviceUiDeviceList() {
  const params = useParams();
  const roomId = params.id ? +params.id : undefined;
  const {
    queryParams: { deviceTypeId },
  } = useDeviceStore();
  const { data: allDevices } = useGetAllDevices(deviceTypeId);
  const { data: rooms } = useGetRooms(roomId);

  return (
    <StyledDeviceUiDeviceList>
      <DeviceUiAddDeviceModal />
      {rooms &&
        rooms.map(({ id, label }) => (
          <DeviceSection key={id} roomId={id} roomLabel={label} allDevices={allDevices || []} />
        ))}
    </StyledDeviceUiDeviceList>
  );
}

export default DeviceUiDeviceList;
