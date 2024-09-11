import { DeviceUiAppBar } from '@smart-home/device/ui-app-bar';
import { DeviceUiDeviceList } from '@smart-home/device/ui-device-list';

import { StyledDeviceFeatureDeviceDashboard } from './device-feature-device-dashboard.styled';

function DeviceFeatureDeviceDashboard() {
  return (
    <StyledDeviceFeatureDeviceDashboard>
      <DeviceUiAppBar />
      <DeviceUiDeviceList />
    </StyledDeviceFeatureDeviceDashboard>
  );
}

export default DeviceFeatureDeviceDashboard;
