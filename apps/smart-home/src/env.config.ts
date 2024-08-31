interface IEnvConfig {
  supabase: {
    anonKey: string;
    supabaseUrl: string;
  };
  translation: {
    path: string;
    fallbackLng: string;
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

const getEnvConfig = (): IEnvConfig => ({
  supabase: {
    anonKey: getValue(import.meta.env.VITE_ANON_KEY, ''),
    supabaseUrl: getValue(import.meta.env.VITE_PROJECT_URL, ''),
  },
  translation: {
    fallbackLng: 'en',
    path: '/locales/{{lng}}/{{ns}}.json',
  },
});
export const env = getEnvConfig();
