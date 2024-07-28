import { supabase } from '@smart-home/shared/supabase/db';

interface IRoomsList {
  id: number;
  label: string;
}

export async function getRooms(): Promise<IRoomsList[] | null> {
  const { data } = await supabase.from('Rooms').select().order('id', { ascending: true });
  return data;
}

export async function updateRoom(id: number, label: string) {
  const { error } = await supabase.from('Rooms').update({ label: label }).eq('id', id);
  return error;
}

export async function addRoom(label: string) {
  const { error } = await supabase.from('Rooms').insert({ label: label });
  return error;
}
