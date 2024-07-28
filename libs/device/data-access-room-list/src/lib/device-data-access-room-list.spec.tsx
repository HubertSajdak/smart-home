import { render } from '@testing-library/react';

import DeviceDataAccessRoomList from './device-data-access-room-list';

describe('DeviceDataAccessRoomList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceDataAccessRoomList />);
    expect(baseElement).toBeTruthy();
  });
});
