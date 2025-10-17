import React from 'react'
import Image from 'next/image'
import { LightBulbIcon } from '@heroicons/react/16/solid'

export default function OnlineUsers() {
    return (
        <div>
            <ul className="flex gap-2 flex-col items-center px-auto bg-white w-100 h-100 rounded-xl m-auto mt-10 overflow-y-auto shadow-md" >
                <h2 className="font-black text-center mt-5 text-2xl gap-2 mb-5">Tus Contactos Conectados</h2>
                <li className="w-fit p-2 bg-slate-300 rounded-full">
                    <div className="flex gap-5 items-center">
                        <LightBulbIcon className="size-5  text-green-400" />
                        <p className="text-xl font-bold">Santiago Mejia</p>
                        <Image
                            src={'/pruebaUser.jpg'}
                            width={40}
                            height={40}
                            alt="User Image"
                            className="rounded-full"
                        />
                    </div>
                </li>
            </ul>
        </div>
    )
}
