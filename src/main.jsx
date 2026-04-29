import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css' //not named or default import, just to inject css and use it in the op
import App1,{App,Sum,jsxHeading,reactHeading,Set,Update,Parent,Parent2,Parent3,Parent4} from './Practice.jsx'
import RouterApp from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <>
//     <App />
//     <App1 />
//     <Sum />
//     {jsxHeading}
//     {reactHeading}
//     <Set />
//     <Update />
//     <Parent />
//     <Parent2 />
//     <Parent3/>
//     <Parent4 />
//     </>
//   </StrictMode>,
// )
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RouterApp />
  </BrowserRouter>
)
//browser router enables routing system in the component metioned(routerapp)
