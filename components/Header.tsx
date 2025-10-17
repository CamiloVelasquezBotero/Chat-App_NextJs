'use client'
import { useStore } from '@/src/store'
import DropDownMenu from './DropDownMenu'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
    const userData = useStore((state) => state.userData)

    const token = useStore((state) => state.token)
    const getUserData = useStore((state) => state.getUserData)
    const router = useRouter()
    
    useEffect(() => {
      if(!token) {
        router.push('/')
        return
      }
      getUserData()
    }, [token])

    return (
        <header className="grid grid-cols-2 bg-slate-800 items-center p-4">
            <Link href={'/dashboard'}>
              <h1 className="text-end text-4xl font-black text-white text-shadow-lg">Chat App NextJs</h1>
            </Link>
            {userData.email && (
              <div className="flex justify-end mr-10 gap-5 items-center">
                <p className="text-white font-black">¡Hola {userData.name}!</p>
                <DropDownMenu />
              </div>
            )} 
        </header>
    )
}
