import { render } from '@testing-library/react';

import DeviceUiRoomList from './device-ui-room-list';

describe('DeviceUiRoomList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceUiRoomList />);
    expect(baseElement).toBeTruthy();
  });
});
