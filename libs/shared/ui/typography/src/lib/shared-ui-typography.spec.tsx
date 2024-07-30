import { render } from '@testing-library/react';

import SharedUiTypography from './typography';

describe('SharedUiTypography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiTypography>Test</SharedUiTypography>);
    expect(baseElement).toBeTruthy();
  });
});
