import FoundUsers from '@/components/FoundUsers'
import OnlineUsers from '@/components/OnlineUsers'
import React from 'react'

export default function page() {
  return (
    <div className='grid grid-cols-[40%_60%] h-full items-center mt-5'>
      <div className=''>
        <OnlineUsers />
      </div>

      <div className='bg-white w-3xl mt-10 rounded-xl h-full'>
        <p className="font-black text-4xl text-center mt-2">
          Encuentra a tu <span className="text-indigo-800">Contacto</span>
        </p>

        <form 
          action=""
        >
          <div className='flex justify-center gap-3 mt-5'>
            <label 
              htmlFor="searchingName" 
              className='font-bold text-2xl'
            >Nombre:</label>
            <input
              id='searchingName'
              type="text"
              placeholder='Escribe el "Email" o "Celular" de tu contacto'
              className='outline-none p-2 shadow-md w-100'
            />
          </div>

          <ul>
            <FoundUsers />
          </ul>
        </form>
      </div>
    </div>
  )
}
