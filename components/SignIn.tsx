import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className='text-sm font-semibold text-[#D1D1D1] hover:cursor-pointer hover:text-[#959693] hoverEffect'>
         LogIn
      </button>
    </SignInButton>
  )
}

export default SignIn
