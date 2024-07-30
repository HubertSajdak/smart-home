import { ThemeProvider } from '@smart-home/shared/theme/smart-home-theme';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('app', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
