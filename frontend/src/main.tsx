import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './containers/Home/home.tsx'
import Race from "./containers/races/races.tsx"
import RacePage from './containers/races/races.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/race/:id" element={<RacePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)