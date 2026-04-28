import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //not named or default import, just to inject css and use it in the op
import App1,{App,Sum,jsxHeading,reactHeading,Set,Update,Parent,Parent2,Parent3,Parent4} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <App1 />
    <Sum />
    {jsxHeading}
    {reactHeading}
    <Set />
    <Update />
    <Parent />
    <Parent2 />
    <Parent3/>
    <Parent4 />
    </>
  </StrictMode>,
)
