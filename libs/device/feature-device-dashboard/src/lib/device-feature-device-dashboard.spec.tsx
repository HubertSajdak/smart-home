import { render } from '@testing-library/react';

import DeviceFeatureDeviceDashboard from './device-feature-device-dashboard';

describe('DeviceFeatureDeviceDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceFeatureDeviceDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
