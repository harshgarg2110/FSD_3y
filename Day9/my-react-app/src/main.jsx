import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Marks from './Marks.jsx'
import Display from './Display.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Marks name={"harsh"} roll={78} m1={78} m2={88} m3={89}/>
    <Display />
  </StrictMode>,
)