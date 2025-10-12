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
import ReactDevelopment from './pages/React.jsx';
import Vue from './pages/Vue.jsx';
import AngularDevelopment from './pages/angular.jsx';
import NodejsDevelopment from './pages/Node.jsx';
import LaravelDevelopment from './pages/larevel.jsx';
import PHPDevelopment from './pages/php.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import CaseStudyDetails from './pages/CaseStudiesDetails.jsx';

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
  {
    path: "/react-js",
    element: <ReactDevelopment />,
  },
  {
    path: "/vue-js",
    element: <Vue />,
  },
  {
    path: "/angular-js",
    element: <AngularDevelopment />,
  },
  {
    path: "/node-js",
    element: <NodejsDevelopment />,
  },
  {
    path: "/laravel",
    element: <LaravelDevelopment />,
  },
  {
    path: "/php",
    element: <PHPDevelopment />,
  },
  
  {
    path: "/casestudies",
    element: <CaseStudies />,
  },
  {
    path: "/casestudies/:id",
    element: <CaseStudyDetails />,
  },
  
   ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)