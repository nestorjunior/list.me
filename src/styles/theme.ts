import { createTheme } from '@mui/material/styles';

// Definindo paletas de cores
const blueColors = {
  50: '#eaf9fb',
  100: '#dfedf0',
  200: '#c0d9de',
  300: '#9cc5cb',
  400: '#80b3bb',
  500: '#6ca8b1',
  600: '#60a3ae',
  700: '#4e8e99',
  800: '#417f88',
  900: '#2c6e78',
};

const grayColors = {
  50: '#f4f5f6',
  100: '#e7e7e7',
  200: '#cccccc',
  300: '#b0b1b1',
  400: '#97999b',
  500: '#868a8e',
  600: '#7e8389',
  700: '#6b7077',
  800: '#5e646b',
  900: '#4d576',
};

const redColors = {
  50: '#ffeaed',
  100: '#fed5d9',
  200: '#f2aab1',
  300: '#e87c87',
  400: '#e05562',
  500: '#db3c4b',
  600: '#da2d40',
  700: '#c21f31',
  800: '#ad182b',
  900: '#980b22',
};

// Criando o tema com as cores fornecidas
const theme = createTheme({
  palette: {
    primary: {
      main: blueColors[500],
      light: blueColors[50],
      dark: blueColors[900],
    },
    secondary: {
      main: grayColors[500],
      light: grayColors[50],
      dark: grayColors[900],
    },
    error: {
      main: redColors[500],
      light: redColors[50],
      dark: redColors[900],
    },
    background: {
      default: '#ffffff',
      paper: grayColors[50],
    },
    text: {
      primary: '#000000',
      secondary: grayColors[500],
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed, sans-serif',
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: blueColors[500],
          color: '#fff',
          '&:hover': {
            backgroundColor: blueColors[700],
          },
        },
        containedSecondary: {
          backgroundColor: grayColors[500],
          color: '#fff',
          '&:hover': {
            backgroundColor: grayColors[700],
          },
        },
        outlinedPrimary: {
          borderColor: blueColors[500],
          color: blueColors[500],
          '&:hover': {
            borderColor: blueColors[700],
            backgroundColor: blueColors[50],
          },
        },
        outlinedSecondary: {
          borderColor: grayColors[500],
          color: grayColors[500],
          '&:hover': {
            borderColor: grayColors[700],
            backgroundColor: grayColors[50],
          },
        },
        textPrimary: {
          color: blueColors[500],
          '&:hover': {
            backgroundColor: blueColors[50],
          },
        },
        textSecondary: {
          color: grayColors[500],
          '&:hover': {
            backgroundColor: grayColors[50],
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: grayColors[700], 
          textDecoration: 'none',
          '&:hover': {
            color: grayColors[900], 
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          a: {
            color: blueColors[700],
            textDecoration: 'none',
            '&:hover': {
              color: blueColors[900],
            },
          },
        },
      },
    },
  },
});

export default theme;
