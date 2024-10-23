import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './composant/Layout'
import Personnel from './pages/Personnel'
import Dashboard from './pages/Dashboard'
import Planning from './pages/Planning'
import Retard from './pages/Retard'
import { SnackbarProvider } from 'notistack';
import Absent from './pages/Absent'

const App = () => {
  return (
    <>
      <BrowserRouter >
        <SnackbarProvider maxSnack={3}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="personnel" element={<Personnel />} />
              <Route path="planning" element={<Planning />} />
              <Route path="retard" element={<Retard />} />
              <Route path="presence" element={<Absent />} />
            </Route>
          </Routes>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
