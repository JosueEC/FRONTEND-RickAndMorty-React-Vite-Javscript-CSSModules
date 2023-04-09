import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

import UserState from './context/User/UserState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserState>
      <App />
    </UserState>
  </BrowserRouter>
)
