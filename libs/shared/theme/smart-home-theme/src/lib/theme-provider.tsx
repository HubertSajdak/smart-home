import { ReactNode } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { darkTheme } from './theme';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <SCThemeProvider theme={darkTheme}>{children}</SCThemeProvider>;
}
