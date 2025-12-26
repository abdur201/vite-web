import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // <-- 1. Bunu ekle
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- 2. App'i bunun içine al */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)