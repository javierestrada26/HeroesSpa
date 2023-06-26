import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import AppRouter
 from './router/AppRouter'
import { HeroesApp } from './HeroesApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter>
      <HeroesApp/>
    </AppRouter>
  </React.StrictMode>,
)
