import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import LoginPage from './pages/LoginPage'
import CreateAccount from './pages/CreateAccount'

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/account' element={<CreateAccount />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
