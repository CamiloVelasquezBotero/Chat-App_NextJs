'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LightBulbIcon, PlusCircleIcon } from '@heroicons/react/16/solid'
import Link from "next/link";
import OnlineUsers from "@/components/OnlineUsers";

export default function DashBoard() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col w-full">
          <OnlineUsers />

          <div className="flex mx-auto gap-20 mt-3 items-center">
            <button>
              <PlusCircleIcon
                className="size-13 text-cyan-900 hover:text-cyan-800 transition cursor-pointer"
                onClick={() => router.push('/add-contact')}
              />
            </button>
            <button 
              className="p-2.5 transition-all bg-cyan-900 hover:bg-cyan-800 text-white font-bold text-xl rounded-xl cursor-pointer"
              onClick={() => router.push('/contact-list')}
            >Ver Contactos</button>
          </div>
        </div>

        <div className="flex items-center">
          {isChatOpen ? (
            <div>chat</div>
          ) : (
            <p className="font-black text-5xl text-center mx-5">
              Empieza Eligiendo un <span className="text-indigo-800">Contacto en linea</span> en linea para <span className="text-indigo-800">Chatear</span>
            </p>
          )}
        </div>
      </div>
    </>
  )
}
