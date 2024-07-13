import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center gap-3'>

    <div className='text-center'>
        <p className='text-[40px] font-bold'>Welcome to Sendrr.</p>
        <p>create an account with sendrr</p>
    </div>

    <form action="" className='flex flex-col gap-5 auth'>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <button className='p-3 rounded-md w-full bg-primary text-white border-2 border-white'>Sign in</button>
    </form>

    <div className='text-start'>
        <p className='text-start'>I have an account already? <Link href="/login" className='underline'>Login</Link></p>
    </div>

</div>
  )
}

export default SignUp