import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Store.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Store>
    <App />
  </Store>
  </BrowserRouter>
</React.StrictMode>,
)
