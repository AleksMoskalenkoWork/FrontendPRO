// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: { main: '#0a192f', contrastText: '#fff' },
        secondary: { main: '#007acc', contrastText: '#fff' },
        background: { default: '#f4f6f8', paper: '#fff' },
        text: { primary: '#1a1a1a', secondary: '#5c5c5c' },
      },
      typography: {
        fontFamily: `'Roboto', 'Helvetica Neue', 'Arial', sans-serif`,
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#0a192f',
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
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              textTransform: 'none',
              fontWeight: 500,
              border: '1px solid #0a192f',
              backgroundColor: '#0a192f',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#132c54',
                borderColor: '#132c54',
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
        primary: { main: '#007acc', contrastText: '#fff' },
        secondary: { main: '#0a192f', contrastText: '#fff' },
        background: { default: '#0d1117', paper: '#161b22' },
        text: { primary: '#ffffff', secondary: '#c9d1d9' },
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
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              textTransform: 'none',
              fontWeight: 500,
              border: '1px solid #007acc',
              backgroundColor: '#007acc',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#3399ff',
                borderColor: '#3399ff',
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
