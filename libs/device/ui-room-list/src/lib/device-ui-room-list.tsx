import { addRoom, getRooms, updateRoom } from '@smart-home/device/data-access-room-list';
import React, { useEffect, useState } from 'react';

import AddNewRoom from './components/add-new-room';
import RoomInput from './components/room-input';

interface IRoomList {
  id: number;
  label: string;
}

export function DeviceUiRoomList() {
  const [rooms, setRooms] = useState<IRoomList[] | null>(null);
  const getRoomsList = async () => {
    const data = await getRooms();
    setRooms(data);
  };
  const editRoom = async (id: number, label: string) => {
    await updateRoom(id, label);
    await getRoomsList();
  };
  const addNewRoom = async (label: string) => {
    await addRoom(label);
    await getRoomsList();
  };
  useEffect(() => {
    getRoomsList();
  }, []);
  return (
    <>
      <AddNewRoom onAddRoom={addNewRoom} />
      {rooms &&
        rooms.map(({ label, id }) => {
          return <RoomInput onEditRoom={editRoom} key={id} roomId={id} label={label} />;
        })}
    </>
  );
}
