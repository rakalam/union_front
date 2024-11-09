import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './composant/Layout'
import Personnel from './pages/Personnel'
import Dashboard from './pages/Dashboard'
import Planning from './pages/Planning'
import Retard from './pages/Retard'
import { SnackbarProvider } from 'notistack';
import Absent from './pages/Absent'
import ModeChange from './composant/ModeChange'
import Ontest from './pages/Ontest'
import Recherche from './pages/recherche'
import Info_personnel from './composant/personnel/info_personnel'
import Accueille from './pages/Accueille'
import Page_reiniialisation from './pages/Page_reiniialisation'


const App = () => {
  return (
    <>
      <BrowserRouter >
        <SnackbarProvider maxSnack={3}>
          <Routes>
            <Route path="/" element={<Accueille />} />
            <Route path="/test" element={<Ontest />} />

            <Route path="/logic" element={<Layout />}> 
              <Route index element={<Dashboard />} />
              <Route path="personnel" element={<Personnel />} />
              <Route path="info_personnel" element={<Info_personnel />} />
              <Route path="planning" element={<Planning />} />
              <Route path="retard" element={<Retard />} />
              <Route path="presence" element={<Absent />} />
              <Route path="change_mode" element={<ModeChange />} />
              <Route path="recherche" element={<Recherche />} />
              <Route path="mis_a_jour" element={<Page_reiniialisation />} />
            </Route>
          
          </Routes>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
