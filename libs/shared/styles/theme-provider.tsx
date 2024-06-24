import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import { ReactNode } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <SCThemeProvider theme={darkTheme}>{children}</SCThemeProvider>;
}
