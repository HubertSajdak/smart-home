import { setupI18n } from '@smart-home/shared/utils/translation';

import { env } from './env.config';

const i18n = setupI18n(env.translation);
export default i18n;
