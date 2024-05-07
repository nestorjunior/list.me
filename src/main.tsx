import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './assets/styles/global.scss'
import { ResetStyles } from './styles/ResetStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<ResetStyles />
    <App />
  </React.StrictMode>,
)
