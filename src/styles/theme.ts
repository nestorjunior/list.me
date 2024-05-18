import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6ca8b1', // Escolha uma cor principal da sua paleta de blue
      light: '#eaf9fb',
      dark: '#2c6e78',
    },
    secondary: {
      main: '#868a8e', // Escolha uma cor principal da sua paleta de gray
      light: '#f4f5f6',
      dark: '#4d576',
    },
    error: {
      main: '#db3c4b', // Escolha uma cor principal da sua paleta de red
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
  },
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
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
});

export default theme;
