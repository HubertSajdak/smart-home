import { ThemeProvider } from '@smart-home/shared/theme/smart-home-theme';
import { render } from '@testing-library/react';

import { NavLink } from './nav-link';

describe('SharedUiNavLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <NavLink label={'test'} path={'/'} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
