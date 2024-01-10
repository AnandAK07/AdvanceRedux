import React from 'react'
import { Login } from '../features/auth/components/Login'
import { Navbar } from '../features/navbar/Navbar'

export const LoginPage = () => {
  return (
    <div>
      <Navbar/>
      <Login />
    </div>
  )
}
