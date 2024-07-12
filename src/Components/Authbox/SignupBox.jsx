import React from 'react'
import './Loginbox.css'
import Custominput from '../Common/Custominput/Custominput'

function SignupBox({setBoxtype}) {
  return (
    <div className='d-flex flex-column'>
      <div className='mt-4'>
      <Custominput label={'Name'} value={null} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Email'} value={null} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Mobile Number'} value={null} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Password'} value={null} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Confirm Password'} value={null} />
      </div>

      <button className='common-button mt-4 align-self-center'>Signup</button>
      <p className='already-account  mt-4'>Already have an account<i onClick={()=>setBoxtype('login')}> login here</i></p>

    </div>
  )
}

export default SignupBox