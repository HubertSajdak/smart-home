const numToPx = (...numbers: number[]) => numbers.map((number) => `${number * 8}px`).join(' ');

interface IDarkTheme {
  palette: {
    primary: {
      light: string;
      main: string;
    };
    text: {
      light: string;
      dark: string;
      grey: string;
    };
    common: {
      black: string;
      white: string;
    };
  };
  typography: {
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      light: 300;
      regular: 400;
      medium: 500;
      bold: 700;
    };
    body: {
      weight: 400;
      font: 'Inter';
      fontSize: '16px';
      letterSpacing: '-0.01em';
    };
    bodyBold: {
      weight: 700;
      font: 'Inter';
      fontSize: '16px';
      letterSpacing: '-0.01em';
    };
    headerS: {
      weight: 700;
      font: 'Inter';
      fontSize: '24px';
      letterSpacing: '-0.01em';
    };
    headerM: {
      weight: 700;
      font: 'Inter';
      fontSize: '32px';
      letterSpacing: '-0.02em';
    };
    headerL: {
      weight: 700;
      font: 'Inter';
      fontSize: '40px';
      letterSpacing: '-0.02em';
    };
  };
  spacing: (...numbers: number[]) => string;
  screen: {
    isMobile: '360px';
    isTablet: '965px';
    isDesktop: '1440px';
  };
}

export const darkTheme: IDarkTheme = {
  palette: {
    primary: {
      light: '#232C37',
      main: '#171C26',
    },
    text: {
      light: '#FFFFFF',
      dark: '#000000',
      grey: 'rgba(255, 255, 255, 0.5)',
    },
    common: {
      black: '#151618',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontSize: {
      small: '14px',
      medium: '16px',
      large: '32px',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    body: {
      weight: 400,
      font: 'Inter',
      fontSize: '16px',
      letterSpacing: '-0.01em',
    },
    bodyBold: {
      weight: 700,
      font: 'Inter',
      fontSize: '16px',
      letterSpacing: '-0.01em',
    },
    headerS: {
      weight: 700,
      font: 'Inter',
      fontSize: '24px',
      letterSpacing: '-0.01em',
    },
    headerM: {
      weight: 700,
      font: 'Inter',
      fontSize: '32px',
      letterSpacing: '-0.02em',
    },
    headerL: { weight: 700, font: 'Inter', fontSize: '40px', letterSpacing: '-0.02em' },
  },
  spacing: numToPx,
  screen: {
    isMobile: '360px',
    isTablet: '965px',
    isDesktop: '1440px',
  },
};
