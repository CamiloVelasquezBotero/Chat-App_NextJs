import { create } from 'zustand'
import { UserData } from './types'
import api from './lib/axios'
import { userDataSchema, userLoginSchema } from './schema-zod'

interface Store {
    token: string
    userData: UserData,

    setToken: (token:string) => void,
    getUserData: () => void
}

export const useStore = create<Store>((set, get) => ({
    token: '',
    userData: {
        name: '',
        email: ''
    },

    setToken: (token) => {
        set(() => ({
            token: token
        }))
        localStorage.setItem('token', token)
    },
    getUserData: async () => {
        const tokenStorage = localStorage.getItem('token')
        try {
            const url = '/dashboard/api'
            const { data } = await api.get(url, {headers: {Authorization: `Bearer ${tokenStorage}`}})
            const result = userDataSchema.safeParse(data)
            if(result.success) {
                set(() => ({
                    userData: {
                        name: result.data.name,
                        email: result.data.email,
                    }
                }))
            }
        } catch (error) {
            console.log('There was an error getting user Data', error)
        }
    }
}))