import { GlobalStyles, ThemeProvider } from '@smart-home/shared/theme/smart-home-theme';
import { ReactQueryWrapper } from '@smart-home/shared/utils/react-query';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import i18n from '../i18n';
import { router } from './router';

export function App() {
  return (
    <ReactQueryWrapper>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18nextProvider>
    </ReactQueryWrapper>
  );
}

export default App;
