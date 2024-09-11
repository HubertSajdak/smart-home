import { useGetAllDevicesByRoom } from '@smart-home/device/data-access-device-list';
import { useEffect } from 'react';

import DeviceSection from './components/device-section';
import { StyledDeviceUiDeviceList } from './components/device-ui-device-list.styled';

function DeviceUiDeviceList() {
  const { data } = useGetAllDevicesByRoom();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <StyledDeviceUiDeviceList>
      {data &&
        data.map(({ id, label, allDevices }) => (
          <DeviceSection key={id} id={id} label={label} allDevices={allDevices} />
        ))}
    </StyledDeviceUiDeviceList>
  );
}

export default DeviceUiDeviceList;
