import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <CssBaseline /> */}
		<GlobalStyles />
		<App />
  </React.StrictMode>,
)
