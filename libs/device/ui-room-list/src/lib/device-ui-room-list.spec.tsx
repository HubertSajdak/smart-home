import '@testing-library/jest-dom';

import { ReactQueryWrapper } from '@smart-home/shared/utils/react-query';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, vi } from 'vitest';

import DeviceUiRoomList from './device-ui-room-list';

vi.mock('@smart-home/device/data-access-room-list', () => ({
  useGetRoomsNavigationList: () => ({
    data: [
      { id: 1, label: 'Living Room' },
      { id: 2, label: 'Kitchen' },
    ],
  }),
  useAddRoom: () => ({
    mutate: vi.fn(),
  }),
  useUpdateRoom: () => ({
    mutate: vi.fn(),
  }),
  useDeleteRoom: () => ({
    mutate: vi.fn(),
  }),
}));
vi.mock('./components/room-input', () => ({
  default: ({ label }: { label: string }) => {
    return (
      <div>
        <span>{label}</span>
      </div>
    );
  },
}));

vi.mock('./components/add-new-room', () => ({
  default: ({ onAddRoom }: { onAddRoom: () => void }) => {
    return <button onClick={() => onAddRoom()}>Add Room</button>;
  },
}));
const renderRoomList = () => {
  render(
    <ReactQueryWrapper>
      <MemoryRouter>
        <DeviceUiRoomList />
      </MemoryRouter>
    </ReactQueryWrapper>
  );
};
describe('RoomList', () => {
  test('renders RoomList component with AddRoom component and room list', () => {
    renderRoomList();
    expect(screen.getByText('Add Room')).toBeInTheDocument();
    expect(screen.getByText('Living Room')).toBeInTheDocument();
    expect(screen.getByText('Kitchen')).toBeInTheDocument();
  });
});
