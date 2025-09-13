
type UserFormProps= {
    condition: 'sign up' | 'log in'
}

export default function UserForm({condition}:UserFormProps) {

    const conditionText:Record<UserFormProps['condition'], string> = {
        'sign up': 'Create Account',
        'log in': 'Log In',
    }
    const valueSubmit = conditionText[condition]

    return (
        <>
            {condition === 'sign up' && (
                <div className='flex gap-5 items-center w-full justify-center'>
                    <label htmlFor="name" className='font-black text-4xl ml-19 text-shadow-lg'>Name</label>
                    <input
                        type="name"
                        name='name'
                        className='outline-none shadow-xl border border-slate-200 transition-all p-2 rounded-lg w-100'
                        placeholder='¿What is your name?'
                    />
                </div>
            )}
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
            {condition === 'sign up' &&(
                <div className='flex gap-5 items-center w-full justify-center'>
                    <label htmlFor="confirmPas" className='font-black text-4xl ml-7 text-shadow-lg'>Confirm</label>
                    <input
                        type="password"
                        name='confirmPas'
                        className='outline-none shadow-xl border border-slate-200 transition-all p-2 rounded-lg w-100'
                        placeholder='Confirm your password'
                    />
                </div>
            )}

            <input
                type="submit"
                className='text-shadow-md w-fit p-2 mt-5 bg-indigo-700 hover:bg-indigo-600 hover:shadow-md rounded-lg font-black text-2xl text-white transition-all cursor-pointer'
                value={valueSubmit}
            />
        </>
    )
}
