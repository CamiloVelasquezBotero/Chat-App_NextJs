'use client'
import { useEffect, useState } from "react";
import FoundUsers from "./FoundUsers";
import api from "@/src/lib/axios";
import { UserData } from "@/src/types";
import { usersFoundInSearch } from "@/src/schema-zod";

export default function UserSearch() {
    const [query, setQuery] = useState<string>('')
    const [users, setUsers] = useState<UserData[]>([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const {data} = await api.get(`/add-contact/api?query=${query}`)
                const result = usersFoundInSearch.safeParse(data)
                if(result.success) {
                    setUsers(result.data)
                }
            } catch (error) {
                console.log('There was an error fetching the users')
            }
        }
        fetchUsers()
    }, [query])

  return (
    <div className='bg-white w-3xl mt-10 rounded-xl h-full'>
        <p className="font-black text-4xl text-center mt-2">
          Encuentra a tu <span className="text-indigo-800">Contacto</span>
        </p>

        <form 
          action=""
        >
          <div className='flex justify-center gap-3 mt-5'>
            <label 
              htmlFor="querySearch" 
              className='font-bold text-2xl'
            >Email o Nombre:</label>
            <input
              id='querySearch'
              type="text"
              placeholder='Escribe el "Email" o "Nombre" de tu contacto para encontrarlo'
              className='outline-none p-2 shadow-md w-100'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-5">
                <FoundUsers
                    users={users}
                />
          </div>
        </form>
      </div>
  )
}
