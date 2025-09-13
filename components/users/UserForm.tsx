import Link from 'next/link'
import React from 'react'

export default function UserForm() {
    return (
        <>
            <div className='flex gap-5 items-center w-full justify-center'>
                <label htmlFor="name" className='font-black text-4xl ml-19 text-shadow-lg'>Name</label>
                <input
                    type="name"
                    name='name'
                    className='outline-none shadow-xl border border-slate-200 transition-all p-2 rounded-lg w-100'
                    placeholder='¿What is your name?'
                />
            </div>
            <div className='flex gap-5 items-center w-full justify-center'>
                <label htmlFor="email" className='font-black text-4xl ml-19 text-shadow-lg'>Email</label>
                <input
                    type="email"
                    name='email'
                    className='outline-none shadow-xl border border-slate-200 transition-all p-2 rounded-lg w-100'
                    placeholder='Write your E-mail'
                />
            </div>
            <div className='flex gap-5 items-center w-full justify-center'>
                <label htmlFor="password" className='font-black text-4xl text-shadow-lg'>Password</label>
                <input
                    type="password"
                    name='password'
                    className='outline-none shadow-xl border border-slate-200 transition-all p-2 rounded-lg w-100'
                    placeholder='Write your password'
                />
            </div>
            <div className='flex gap-5 items-center w-full justify-center'>
                <label htmlFor="confirmPas" className='font-black text-4xl ml-7 text-shadow-lg'>Confirm</label>
                <input
                    type="password"
                    name='confirmPas'
                    className='outline-none shadow-xl border border-slate-200 transition-all p-2 rounded-lg w-100'
                    placeholder='Confirm your password'
                />
            </div>

            <input
                type="submit"
                className='text-shadow-md w-fit p-2 mt-5 bg-indigo-700 hover:bg-indigo-600 hover:shadow-md rounded-lg font-black text-2xl text-white transition-all cursor-pointer'
                value={'Crear Cuenta'}
            />

            <div>
                <p className="text-lg text-center transition-all">
                    ¿Ya tienes una cuenta?
                    <Link href={'/'}><span className="text-indigo-800 hover:text-indigo-900 font-bold"> Inicia Sesión</span></Link>
                </p>
                <p className="text-lg text-center transition-all">
                    ¿Olvidaste tu contraseña?
                    <Link href={'/recover-password'}><span className="text-indigo-800 hover:text-indigo-900 transition-all font-bold"> Recupera tu cuenta</span></Link>
                </p>
            </div>
        </>
    )
}
