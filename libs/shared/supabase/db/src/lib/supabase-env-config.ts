interface ISupabaseEnvConfig {
  smartHomeDB: {
    anonKey: string;
    supabaseUrl: string;
  };
}

const getValue = <T extends string | string[] | undefined[]>(envValue: T | undefined, defaultValue: T): T => {
  if (
    (Array.isArray(envValue) && !!envValue.filter((item) => !!item).length) ||
    (!Array.isArray(envValue) && envValue)
  ) {
    return envValue;
  }

  return defaultValue;
};

const getSupabaseEnvConfig = (): ISupabaseEnvConfig => ({
  smartHomeDB: {
    anonKey: getValue(import.meta.env.VITE_ANON_KEY, ''),
    supabaseUrl: getValue(import.meta.env.VITE_PROJECT_URL, ''),
  },
});
export const supabaseEnv = getSupabaseEnvConfig();
