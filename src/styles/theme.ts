// src/theme.js
import { createTheme } from '@mui/material/styles';

// Definindo as cores da paleta
const palette = {
  primary: {
		// main: '#6ca8b1',
		main: '#de4c5a',
    light: '#eaf9fb',
    dark: '#2c6e78',
  },
  secondary: {
    main: '#868a8e',
    light: '#f4f5f6',
    dark: '#4d576',
  },
  error: {
    main: '#db3c4b',
    light: '#ffeaed',
    dark: '#980b22',
  },
  background: {
    default: '#ffffff',
    paper: '#f4f5f6',
  },
  text: {
    primary: '#000000',
    secondary: '#868a8e',
  },
};

// Criando o tema
const theme = createTheme({
  palette: palette,
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
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Customiza o border radius do ButtonGroup
          border: `1px solid ${palette.error.main}`, // Define uma borda personalizada
        },
        grouped: {
          '&:not(:last-of-type)': {
            borderColor: `${palette.error.light}`,
          },
          '&:not(:first-of-type)': {
            borderColor: `${palette.error.main}`,
          },
        },
      },
    },
  },
});

export default theme;
