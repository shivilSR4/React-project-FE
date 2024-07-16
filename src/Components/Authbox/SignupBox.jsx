import React, { useState } from 'react'
import './Loginbox.css'
import Custominput from '../Common/Custominput/Custominput'

function SignupBox({setBoxtype}) {
  const [signupData,setSignupData] = useState({})
  return (
    <div className='d-flex flex-column'>
      <div className='mt-4'>
      <Custominput label={'Name'} name={'Name'} value={} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Email'} name={'email'} type={email} value={null} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Mobile Number'} name={'mobileNumber'} type={number} value={null} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Password'} name={'password'} type={password} value={null} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Confirm Password'} name={'confirmPassword'}type={password} value={null} />
      </div>

      <button className='common-button mt-4 align-self-center'>Signup</button>
      <p className='already-account  mt-4'>Already have an account<i onClick={()=>setBoxtype('login')}> login here</i></p>

    </div>
  )
}

export default SignupBox