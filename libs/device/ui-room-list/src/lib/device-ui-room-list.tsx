import {
  useAddRoom,
  useDeleteRoom,
  useGetRoomsNavigationList,
  useUpdateRoom,
} from '@smart-home/device/data-access-room-list';
import React, { useCallback } from 'react';

import AddNewRoom from './components/add-new-room';
import RoomInput from './components/room-input';

function DeviceUiRoomList() {
  const { data: rooms } = useGetRoomsNavigationList();
  const { mutate: addRoomMutation } = useAddRoom();
  const { mutate: editRoomMutation } = useUpdateRoom();
  const { mutate: deleteRoomMutation } = useDeleteRoom();
  const createRoom = useCallback(() => {
    addRoomMutation();
  }, [addRoomMutation]);
  const editRoom = useCallback(
    ({ id, label }: { id: number; label: string }) => {
      editRoomMutation({ id, label });
    },
    [editRoomMutation]
  );
  const deleteRoom = useCallback(
    (roomId: number) => {
      deleteRoomMutation(roomId);
    },
    [deleteRoomMutation]
  );
  return (
    <>
      <AddNewRoom onAddRoom={createRoom} />
      {rooms &&
        rooms.map(({ label, id }) => {
          return <RoomInput onEditRoom={editRoom} key={id} roomId={id} label={label} onDeleteRoom={deleteRoom} />;
        })}
    </>
  );
}

export default DeviceUiRoomList;
