import { supabaseSmartHome } from '@smart-home/shared/supabase/db';
import { queryKeysConfig } from '@smart-home/shared/utils/react-query';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export interface IRoomsList {
  id: number;
  label: string;
}

async function getRoomsNavigationList(): Promise<IRoomsList[] | null> {
  const { data } = await supabaseSmartHome
    .from(queryKeysConfig.rooms.relationKey)
    .select()
    .order('id', { ascending: true });
  return data;
}

export function useGetRoomsNavigationList() {
  return useQuery<IRoomsList[] | null>({
    queryKey: [queryKeysConfig.roomsNavigation.queryKey],
    queryFn: () => getRoomsNavigationList(),
  });
}

async function getRooms(): Promise<IRoomsList[] | null> {
  const { data } = await supabaseSmartHome
    .from(queryKeysConfig.rooms.relationKey)
    .select()
    .order('id', { ascending: true });
  return data;
}

export function useGetRooms() {
  return useQuery<IRoomsList[] | null>({
    queryKey: [queryKeysConfig.rooms.queryKey],
    queryFn: () => getRooms(),
  });
}

async function getSingleRoom(roomId: number) {
  const { data } = await supabaseSmartHome
    .from(queryKeysConfig.singleRoom.relationKey)
    .select()
    .eq('id', roomId)
    .order('id', { ascending: true });
  return data;
}

export function useGetSingleRoom(roomId: number | undefined) {
  return useQuery<IRoomsList[] | null>({
    queryKey: [queryKeysConfig.singleRoom.queryKey, roomId],
    queryFn: () => {
      if (!roomId) {
        throw new Error('No room ID provided');
      }
      return getSingleRoom(roomId);
    },
  });
}

async function updateRoom({ id, label }: { id: number; label: string }) {
  const { error } = await supabaseSmartHome
    .from(queryKeysConfig.rooms.relationKey)
    .update({ label: label })
    .eq('id', id);
  return error;
}

export function useUpdateRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, label }: { id: number; label: string }) => updateRoom({ id, label }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [queryKeysConfig.roomsNavigation.queryKey] });
      await queryClient.invalidateQueries({ queryKey: [queryKeysConfig.devices.queryKey] });
    },
  });
}

async function addRoom(label: string) {
  const { error } = await supabaseSmartHome.from(queryKeysConfig.rooms.relationKey).insert({ label: label });
  return error;
}

export function useAddRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => addRoom('New Room'),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [queryKeysConfig.roomsNavigation.queryKey] });
    },
  });
}
