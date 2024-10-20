import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './composant/Layout'
import Personnel from './pages/Personnel'
import Dashboard from './pages/Dashboard'
import Compte from './pages/compte'
import Planning from './pages/Planning'
import Retard from './pages/Retard'
import Presence from './pages/Presence'

const App = () => {
  return (
    <>
        <BrowserRouter >
         <Routes>
            <Route path="/" element={<Layout />}>  
              <Route index element={ <Dashboard /> } />
              <Route path="personnel" element={<Personnel />} />
              <Route path="compte" element={<Compte />} />
              <Route path="planning" element={<Planning />} />
              <Route path="retard" element={<Retard />} />
              <Route path="presence" element={<Presence />} />
            </Route>
         </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
