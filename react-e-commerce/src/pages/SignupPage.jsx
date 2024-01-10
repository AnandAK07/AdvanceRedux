import React from 'react'
import { Signup } from '../features/auth/components/Signup'
import { Navbar } from '../features/navbar/Navbar'

export const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  )
}
