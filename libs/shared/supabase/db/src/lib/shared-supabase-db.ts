import { createClient } from '@supabase/supabase-js';

import { supabaseEnv } from './supabase-env-config';

const supabaseSmartHome = createClient(supabaseEnv.smartHomeDB.supabaseUrl, supabaseEnv.smartHomeDB.anonKey);
export { supabaseSmartHome };
