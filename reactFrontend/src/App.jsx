import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'


function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Navigate to="/login" />

}

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
