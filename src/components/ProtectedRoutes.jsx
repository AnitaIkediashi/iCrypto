import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const loginData = localStorage.getItem("registeredUser")

  return (
    loginData ? children : <Navigate to="/" />
  )
}

export default ProtectedRoutes