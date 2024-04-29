import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { SignupAccount } from './pages/SignupAccount'
import { CreateAccount } from './pages/CreateAccount'

export function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/signup' element={<SignupAccount />} />
						<Route path='/account' element={<CreateAccount />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
