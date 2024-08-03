import { ThemeProvider } from '@smart-home/shared/theme/smart-home-theme';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { NavLink } from './nav-link';

describe('SharedUiNavLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <BrowserRouter>
          <NavLink label={'test'} path={'/'} />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
