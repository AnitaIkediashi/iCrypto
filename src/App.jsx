import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Exchange from './pages/exchange/Exchange'
import News from './pages/news/News'
import Registration from './pages/registration/Registration'
import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='exchange' element={<ProtectedRoutes><Exchange /></ProtectedRoutes>} />
        <Route path='news' element={<ProtectedRoutes><News /></ProtectedRoutes>} />
        <Route path='registration' element={<Registration />} />
        <Route path='login' element={<Login />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App