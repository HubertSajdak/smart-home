import { setupSupabase } from '@smart-home/shared/supabase/db';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// @ts-expect-error get rid of env does not exist
const supabaseUrl = import.meta.env.VITE_PROJECT_URL;
//@ts-expect-error get rid of env does not exist
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = setupSupabase({ supabaseUrl, anonKey });
const roomsQueryKey = 'rooms';
const roomsRelationKey = 'rooms';
const roomsWithAllDevicesQueryKey = 'roomsWithAllDevices';

interface IRoomsList {
  id: number;
  label: string;
}

async function getRooms(): Promise<IRoomsList[] | null> {
  const { data } = await supabase.from(roomsRelationKey).select().order('id', { ascending: true });
  return data;
}

export function useGetRooms() {
  return useQuery<IRoomsList[] | null>({ queryKey: [roomsQueryKey], queryFn: () => getRooms() });
}

async function updateRoom({ id, label }: { id: number; label: string }) {
  const { error } = await supabase.from(roomsRelationKey).update({ label: label }).eq('id', id);
  return error;
}

export function useUpdateRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, label }: { id: number; label: string }) => updateRoom({ id, label }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [roomsQueryKey] });
      await queryClient.invalidateQueries({ queryKey: [roomsWithAllDevicesQueryKey] });
    },
  });
}

async function addRoom(label: string) {
  const { error } = await supabase.from(roomsRelationKey).insert({ label: label });
  return error;
}

export function useAddRoom() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => addRoom('New Room'),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [roomsQueryKey] });
    },
  });
}
