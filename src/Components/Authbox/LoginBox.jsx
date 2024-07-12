import React from 'react'
import './Loginbox.css'
import '../../App.css'
import Custominput from '../Common/Custominput/Custominput'

function LoginBox({setBoxtype}) {
  return (
    <>
    <div className='d-flex flex-column'>
        <div className='mt-4'>
        <Custominput label={'Email'} value={null} />
        </div>

        <div className='mt-4'>
        <Custominput label={'password'} value={null} />
        </div>
   
      <button className='common-button mt-4 align-self-center'>Login</button>
      <p className='already-account  mt-4'>Dont have an account <i onClick={()=>setBoxtype('Signup')}>sign up here</i></p>

    </div>
    </>
    
  )
}

export default LoginBox