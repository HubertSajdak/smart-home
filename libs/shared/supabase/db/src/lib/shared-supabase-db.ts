import { createClient } from '@supabase/supabase-js';

export const setupSupabase = ({ supabaseUrl, anonKey }: { supabaseUrl: string; anonKey: string }) => {
  const supabase = createClient(supabaseUrl, anonKey);
  return supabase;
};
