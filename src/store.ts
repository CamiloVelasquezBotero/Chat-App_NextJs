import { create } from 'zustand'
import { UserData } from './types'
import api from './lib/axios'
import { userDataSchema, userLoginSchema } from './schema-zod'

const initialValues = {
    token: '',
    userData: {
        name: '',
        email: ''
    }
}

interface Store {
    token: string
    userData: UserData,

    setToken: (token:string) => void,
    getUserData: () => void,
    logOut: () => void
}

export const useStore = create<Store>((set, get) => ({
    token: initialValues.token,
    userData: initialValues.userData,

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
    },

    logOut: () => {
        localStorage.removeItem('token')
        set(() => ({
            token: initialValues.token,
            userData: initialValues.userData
        }))
    }
}))