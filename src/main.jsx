import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ZenzioCaseStudy from './pages/ZenzioCaseStudy'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/zenzio" element={<ZenzioCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
