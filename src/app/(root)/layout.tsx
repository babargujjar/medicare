import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../../../libs/AuthOptions';
import { redirect } from 'next/navigation';


interface ProtectedRoutLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedRoutLayout({children}: ProtectedRoutLayoutProps) {

    const session = await getServerSession(authOptions)

    if(!session?.user?.email){
        redirect("/signin")
    }

  return <main>{children}</main>;
}

