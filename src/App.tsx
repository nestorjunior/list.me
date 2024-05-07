import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
		<Router>
			<div className='App'>
				<AppRoutes />
			</div>
		</Router>
  );
}
