import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ZenzioCaseStudy from './pages/ZenzioCaseStudy'
import TestDinoCaseStudy from './pages/TestDinoCaseStudy'
import FirstHumanCaseStudy from './pages/FirstHumanCaseStudy'
import NotFound from './pages/NotFound'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/zenzio" element={<ZenzioCaseStudy />} />
        <Route path="/work/testdino" element={<TestDinoCaseStudy />} />
        <Route path="/work/firsthuman" element={<FirstHumanCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
