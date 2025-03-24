import '@testing-library/jest-dom';

import { InputProps } from '@mui/base/Input';
import { ThemeProvider } from '@smart-home/shared/theme/smart-home-theme';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, vi } from 'vitest';

import RoomInput from './room-input';

vi.mock('@mui/base/Input', () => ({
  Input: ({ value, onChange, onBlur, ...rest }: InputProps) => (
    <input
      data-testid="input"
      value={value as string}
      onChange={onChange}
      onBlur={onBlur}
      {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  ),
}));

vi.mock('@smart-home/shared/design-system', () => ({
  NavLink: ({ label, onDelete }: { label: string; onDelete: () => void }) => (
    <div>
      <span data-testid="navlink">{label}</span>
      <button data-testid="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  ),
}));

vi.mock('@smart-home/shared/theme/smart-home-theme', async () => {
  const original = await vi.importActual('@smart-home/shared/theme/smart-home-theme');
  return {
    ...original, // Spread the original exports
    useMediaQuery: vi.fn(() => false), // Mock `useMediaQuery` only
  };
});
const mockOnEditRoom = vi.fn();
const mockOnDeleteRoom = vi.fn();
const renderRoomInput = () => {
  render(
    <ThemeProvider>
      <MemoryRouter>
        <RoomInput roomId={0} onDeleteRoom={mockOnDeleteRoom} label="room name" onEditRoom={mockOnEditRoom} />
      </MemoryRouter>
    </ThemeProvider>
  );
};
describe('RoomInput', () => {
  const user = userEvent.setup();
  test('renders room input', async () => {
    renderRoomInput();
    const roomInput = screen.getByTestId('room-input');
    expect(roomInput).toBeInTheDocument();
    await user.click(roomInput);
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });
  test('after double click on room input, user should be able to edit room name', async () => {
    renderRoomInput();
    const roomInput = screen.getByTestId('room-input');
    await user.dblClick(roomInput);
    const inputElement = await screen.findByRole('textbox');
    expect(inputElement).toHaveValue('');
    await user.type(inputElement, 'New Room Name');
    expect(inputElement).toHaveValue('New Room Name');
  });
});
