import { supabaseSmartHome } from '@smart-home/shared/supabase/db';
import { queryKeysConfig } from '@smart-home/shared/utils/react-query';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const allDevicesQueryKey = 'allDevices';

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

async function getRooms(roomId?: number): Promise<IRoomsList[] | null> {
  if (!roomId) {
    const { data } = await supabaseSmartHome
      .from(queryKeysConfig.rooms.relationKey)
      .select()
      .order('id', { ascending: true });
    return data;
  }
  const { data } = await supabaseSmartHome
    .from(queryKeysConfig.rooms.relationKey)
    .select()
    .eq('id', roomId)
    .order('id', { ascending: true });
  return data;
}

export function useGetRooms(roomId?: number) {
  return useQuery<IRoomsList[] | null>({
    queryKey: [queryKeysConfig.rooms.queryKey, roomId],
    queryFn: () => getRooms(roomId),
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
      await queryClient.invalidateQueries({ queryKey: [allDevicesQueryKey] });
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
