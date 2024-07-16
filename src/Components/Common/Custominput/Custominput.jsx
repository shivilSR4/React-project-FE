import React from 'react'
import './Custominput.css'

function Custominput({type,onblur,onchange,label,value,name}) {
  return (
    <div className='common-input-box'>
        <input type= {type} className='common-input' value={value} name={name} onchange={onchange} onblur={onblur}></input>
        <label htmlFor=''>{label}</label>
    </div>
  )
}

export default Custominput