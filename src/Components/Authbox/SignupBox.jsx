import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './Loginbox.css'
import Custominput from '../Common/Custominput/Custominput'
import axios from 'axios'
import { Errortoast,Successtoast } from 'plugin/Toast/Toast'
function SignupBox({setBoxtype}) {
  const [signupData,setSignupData] = useState({})
  const handleChange = (e)=>{
    setSignupData({...signupData,[e.target.name]:e.target.value})
  }

  const doSignup = ()=>{
    if(signupData.password===signupData.confirmPassword){

      axios({
        method:'POST',
        url:process.env.REACT_APP_BASE_URL+'auth/doSignup',
        data:signupData
      })
      .then((res)=>{
         
        Successtoast(res.messagee)
        setBoxtype('login')

      }).catch((err)=>{
           
        Errortoast(err?.response?.data?.message || 'something went wrong')
      })

    }else{
      Errortoast('Check your password')
    }
  }
  return (

    <div className='d-flex flex-column'>
  <ToastContainer />
      <div className='mt-4'>
      <Custominput label={'Name'} name={'Name'} value={signupData.Name} onchange={handleChange} />
      </div>

      <div className='mt-4'>
      <Custominput label={'Email'} name={'email'} type={'email'} value={signupData.email} onchange={handleChange}/>
      </div>

      <div className='mt-4'>
      <Custominput label={'Mobile Number'} name={'mobileNumber'} type={'number'} value={signupData.mobileNumber} onchange={handleChange}/>
      </div>

      <div className='mt-4'>
      <Custominput label={'Password'} name={'password'} type={'password'} value={signupData.password} onchange={handleChange}/>
      </div>

      <div className='mt-4'>
      <Custominput label={'Confirm Password'} name={'confirmPassword'}type={"password"} value={signupData.confirmPassword} onchange={handleChange}/>
      </div>

      <button className='common-button mt-4 align-self-center' onClick={doSignup}>Signup</button>
      <p className='already-account  mt-4'>Already have an account<i onClick={()=>setBoxtype('login')}> login here</i></p>

    </div>
  )
}

export default SignupBox