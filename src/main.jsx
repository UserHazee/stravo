import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './icons/fontawesome.js';
import App from './App.jsx'
import WebDev from './pages/webdev.jsx'
import WebHosting from './pages/webhosting.jsx'
import GreenHero from './pages/GreenHero.jsx'
import DigitalMarketingSection from './pages/NewSection.jsx'
import ResponsiveDesign from './pages/MoblieResponsiveSection.jsx'
import { BrowserRouter,Routes, Route } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <ScrollToTop/>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/webdev" element={<WebDev />} />
        {/* Add more routes as needed */}
        <Route path="/hosting" element={<WebHosting />} />
        <Route path="/greenhero" element={<GreenHero />} />
        <Route path="/digitalmarketing" element={<DigitalMarketingSection />} />
        <Route path="/mobile" element={<ResponsiveDesign />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
