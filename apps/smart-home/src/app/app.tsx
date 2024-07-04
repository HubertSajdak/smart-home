import { GlobalStyles, ThemeProvider } from '@smart-home/shared/theme/smart-home-theme';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

export function App() {
  const isTrue = true;
  if (isTrue) {
    return 1;
  } else {
    return 2;
  }
  return (
    <ThemeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
