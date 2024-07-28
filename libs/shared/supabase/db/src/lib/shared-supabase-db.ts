import { createClient } from '@supabase/supabase-js';

// @ts-expect-error get rid of env does not exist
const supabaseUrl = import.meta.env.VITE_PROJECT_URL;
// @ts-expect-error get rid of env does not exist
const anonKey = import.meta.env.VITE_ANON_KEY;
const supabase = createClient(supabaseUrl, anonKey);
export { supabase };
