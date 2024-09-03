import { render } from '@testing-library/react';

import DeviceUiAppBar from './device-ui-app-bar';

describe('DeviceUiAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceUiAppBar />);
    expect(baseElement).toBeTruthy();
  });
});
