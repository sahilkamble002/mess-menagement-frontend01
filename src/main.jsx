import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './app.jsx'
import './index.css'

const apiBaseUrl = (import.meta.env.VITE_API_URL || '/').trim()

axios.defaults.baseURL = apiBaseUrl === '/' ? apiBaseUrl : apiBaseUrl.replace(/\/+$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
