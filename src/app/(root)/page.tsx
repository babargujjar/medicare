import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../../../libs/AuthOptions'

export default async function HomePage() {
  // in this session current user data is available
  const session = await getServerSession(authOptions)

  return (
    <main>
        <div>protected routes hello </div>
        <div>logout</div>
    </main>
  )
}
