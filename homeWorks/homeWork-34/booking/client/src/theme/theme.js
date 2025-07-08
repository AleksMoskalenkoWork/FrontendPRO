import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: { main: '#FF8C00', contrastText: '#ffffff' },
        secondary: { main: '#FFA500', contrastText: '#ffffff' },
        background: { default: '#ffffff', paper: '#ffffff' },
        text: { primary: '#000000', secondary: '#4f4f4f' },
      },
      typography: {
        fontFamily: `'Roboto', 'Helvetica Neue', 'Arial', sans-serif`,
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#000000',
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 600,
          color: '#000000',
        },
        body1: {
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#4f4f4f',
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: '#ffffff',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              color: '#FF8C00',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 6,
              textTransform: 'none',
              fontWeight: 600,
              backgroundColor: '#FF8C00',
              color: '#ffffff',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#e67e00',
              },
              '&.active': {
                backgroundColor: '#cc6f00',
              },
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              borderRadius: 6,
              backgroundColor: '#ffffff',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#cccccc',
                },
                '&:hover fieldset': {
                  borderColor: '#FF8C00',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF8C00',
                },
              },
            },
          },
        },
        MuiList: {
          styleOverrides: {
            root: {
              width: { xs: '100%', sm: '150px' },
              maxHeight: '350px',
              minHeight: 'auto',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              textDecoration: 'none',
              fontWeight: 600,
              color: '#FF8C00',
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              border: '1px solid black',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            },
          },
        },
      },
    },

    dark: {
      palette: {
        mode: 'dark',
        primary: { main: '#FF8C00', contrastText: '#000000' },
        secondary: { main: '#FFA500', contrastText: '#000000' },
        background: { default: '#121212', paper: '#1e1e1e' },
        text: { primary: '#ffffff', secondary: '#bbbbbb' },
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
          color: '#ffffff',
        },
        body1: {
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#bbbbbb',
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: '#1e1e1e',
              boxShadow: '0 1px 4px rgba(255,255,255,0.05)',
              color: '#FF8C00',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 6,
              textTransform: 'none',
              fontWeight: 600,
              backgroundColor: '#FF8C00',
              color: '#000000',
              boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: '#e67e00',
              },
              '&.active': {
                backgroundColor: '#ffb84d',
              },
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              borderRadius: 6,
              backgroundColor: '#1e1e1e',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#444',
                },
                '&:hover fieldset': {
                  borderColor: '#FF8C00',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF8C00',
                },
              },
              '& input': {
                color: '#ffffff',
              },
              '& label': {
                color: '#bbbbbb',
              },
            },
          },
        },
        MuiList: {
          styleOverrides: {
            root: {
              width: { xs: '100%', sm: '150px' },
              maxHeight: '350px',
              minHeight: 'auto',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              textDecoration: 'none',
              fontWeight: 600,
              color: '#FF8C00',
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              backgroundColor: '#1e1e1e',
              boxShadow: '0 2px 6px rgba(255,255,255,0.05)',
            },
          },
        },
      },
    },
  },
});

export default theme;
