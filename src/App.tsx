import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
		<Router>
			<div className='App'>
				<GlobalStyles />
				<AppRoutes />
			</div>
		</Router>
  );
}
