import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: { main: '#1b2a41', contrastText: '#ffffff' }, // Navy
        secondary: { main: '#4b5d67', contrastText: '#ffffff' }, // Slate gray
        background: { default: '#f5f7fa', paper: '#ffffff' }, // light gray bg
        text: { primary: '#1e1e1e', secondary: '#5c5c5c' },
      },
      typography: {
        fontFamily: `'Roboto', 'Helvetica Neue', 'Arial', sans-serif`,
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#1b2a41',
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 600,
        },
        body1: {
          fontSize: '1rem',
          lineHeight: 1.6,
        },
      },
      components: {
        MuiLink: {
          styleOverrides: {
            root: {
              textDecoration: 'none',
              color: '#FFF',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              '&:hover': {
                textDecoration: 'underline',
                color: '#2196f3',
              },
            },
          },
        },
        MuiList: {
          styleOverrides: {
            root: {
              listStyle: 'none',
              margin: 0,
              padding: 0,
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              padding: 0,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              textTransform: 'none',
              fontWeight: 500,
              border: '1px solid #1b2a41',
              backgroundColor: '#1b2a41',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#26364d',
                borderColor: '#26364d',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            },
          },
        },
      },
    },

    dark: {
      palette: {
        mode: 'dark',
        primary: { main: '#4b5d67', contrastText: '#ffffff' },
        secondary: { main: '#1b2a41', contrastText: '#ffffff' },
        background: { default: '#121212', paper: '#1e1e1e' },
        text: { primary: '#ffffff', secondary: '#a0a0a0' },
      },
      typography: {
        fontFamily: `'Roboto', 'Helvetica Neue', 'Arial', sans-serif`,
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#ffffff',
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 600,
        },
        body1: {
          fontSize: '1rem',
          lineHeight: 1.6,
        },
      },
      components: {
        MuiLink: {
          styleOverrides: {
            root: {
              textDecoration: 'none',
              color: '#FFF',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              '&:hover': {
                textDecoration: 'underline',
                color: '#2196f3',
              },
            },
          },
        },
        MuiList: {
          styleOverrides: {
            root: {
              listStyle: 'none',
              margin: 0,
              padding: 0,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              textTransform: 'none',
              fontWeight: 500,
              border: '1px solid #4b5d67',
              backgroundColor: '#4b5d67',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#6e8490',
                borderColor: '#6e8490',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(255,255,255,0.05)',
            },
          },
        },
      },
    },
  },
});

export default theme;
