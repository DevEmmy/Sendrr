import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='h-[100vh] flex flex-col items-center justify-center gap-3'>

            <div className='text-center'>
                <p className='text-[40px] font-bold'>Welcome back.</p>
                <p>Enter your sendrr account details to login</p>
            </div>

            <form action="" className='flex flex-col gap-5 auth'>
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <button className='p-3 rounded-md w-full bg-primary text-white border-2 border-white'>Sign in</button>
            </form>

            <div className='text-start'>
                <p className='text-start'>I don't have an account yet? <Link href="/sign-up" className='underline'>Sign up</Link></p>
            </div>

        </div>
    )
}

export default Login