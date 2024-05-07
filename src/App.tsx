import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import { useState } from 'react';

export function App() {
  const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		setDarkMode(prevMode => !prevMode);
	}

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <div className='App'>
					<button onClick={toggleTheme}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}
