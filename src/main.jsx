import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './icons/fontawesome.js';
import App from './App.jsx'
import WebDev from './pages/webdev.jsx'
import WebHosting from './pages/webhosting.jsx'
import RootLayout from './components/RootLayout.jsx';
import OnPageSEO from './pages/Onpage-Seo.jsx'
import BusinessPortfolio from './pages/BusinessPortfolio.jsx'
import ResponsiveDesign from './pages/MoblieResponsiveSection.jsx'
import SinglePageWebsite from './pages/SinglePage.jsx';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/webdev",
    element: <WebDev />,
  },
  {
    path: "/hosting",
    element: <WebHosting />,
  },
  {
    path: "/onpageseo",
    element: <OnPageSEO />,
  },
  {
    path: "/mobile",
    element: <ResponsiveDesign />,
  },
  {
    path: "/singlepagewebsite",
    element: <SinglePageWebsite />,
  },
  {
    path: "/businessportfolio",
    element: <BusinessPortfolio />,
  },
   ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)