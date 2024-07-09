"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
    const handlesignout = () =>{
        signOut()
    }
  return (
    <button className='w-32 h-32 text-white bg-black' onClick={handlesignout}>Signout</button>
  )
}

export default SignOut