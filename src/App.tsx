import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginPage } from './pages/Login'
import { SignupAccount } from './pages/Signup'

export function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/signup' element={<SignupAccount />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
