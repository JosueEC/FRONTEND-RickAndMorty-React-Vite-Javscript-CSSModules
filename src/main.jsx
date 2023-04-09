import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import UserState from './context/User/UserState'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserState>
      <App />
    </UserState>
  </BrowserRouter>
  // </React.StrictMode>,
)
