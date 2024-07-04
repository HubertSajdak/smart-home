const numToPx = (number: number) => `${number * 8}px`;

interface IDarkTheme {
  palette: {
    primary: {
      light: string;
      main: string;
    };
    text: {
      white: string;
      black: string;
      grey: string;
    };
    green: {
      main: string;
    };
    purple: {
      main: string;
    };
    blue: {
      main: string;
    };
    yellow: {
      main: string;
    };
    common: {
      black: string;
      white: string;
    };
  };
  typography: {
    fontSize: string;
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
  };
  spacing: (number: number) => string;
}

export const darkTheme = {
  palette: {
    primary: {
      light: '#232C37',
      main: '#171C26',
    },
    text: {
      white: '#FFFFFF',
      black: '#000000',
      grey: 'rgba(255, 255, 255, 0.5)',
    },
    green: {
      main: '#00FEB6',
    },
    purple: {
      main: '#825DFF',
    },
    blue: {
      main: '#007BFF',
    },
    yellow: {
      main: '#FFED48',
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
  },
  spacing: numToPx,
};
