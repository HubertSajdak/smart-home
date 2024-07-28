import { render } from '@testing-library/react';

import { NavLink } from './nav-link';

describe('SharedUiNavLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLink label={'test'} path={''} />);
    expect(baseElement).toBeTruthy();
  });
});
