import React from 'react'
import { Router,Route,Routes } from 'react-router-dom'
import Authpage from '../Pages/AuthPage/Authpage'
import Home from '../Pages/Home/Home'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Authpage />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    </div>
  )
}

export default Routing