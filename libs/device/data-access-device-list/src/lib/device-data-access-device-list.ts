import { setupSupabase } from '@smart-home/shared/supabase/db';
import { useQuery } from '@tanstack/react-query';

import { allDevicesByRoomDto } from './all-devices-by-room-dto';

// @ts-expect-error get rid of env does not exist
const supabaseUrl = import.meta.env.VITE_PROJECT_URL;
//@ts-expect-error get rid of env does not exist
const anonKey = import.meta.env.VITE_ANON_KEY;
const roomsWithAllDevicesRelationKey = 'rooms_with_all_devices';
const roomsWithAllDevicesQueryKey = 'roomsWithAllDevices';

const supabase = setupSupabase({ supabaseUrl, anonKey });

async function getAllDevicesByRoom() {
  const { data } = await supabase.from(roomsWithAllDevicesRelationKey).select();
  return allDevicesByRoomDto(data);
}

export function useGetAllDevicesByRoom() {
  return useQuery({ queryKey: [roomsWithAllDevicesQueryKey], queryFn: () => getAllDevicesByRoom() });
}
