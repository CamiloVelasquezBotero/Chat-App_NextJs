'use client'
import { useStore } from '@/src/store'
import DropDownMenu from './DropDownMenu'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

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
    
    console.log(userData)

    return (
        <header className="grid grid-cols-2 bg-slate-800 items-center p-4">
            <h1 className="text-end text-4xl font-black text-white text-shadow-lg">Chat App NextJs</h1>
            {userData.email && (
              <div className="flex justify-end mr-10 gap-5 items-center">
                <p className="text-white font-black">¡Hola {userData.name}!</p>
                <DropDownMenu />
              </div>
            )} 
        </header>
    )
}
