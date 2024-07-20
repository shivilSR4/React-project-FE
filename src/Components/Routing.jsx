import React from 'react'
import { Router,Route,Routes } from 'react-router-dom'
import Authpage from '../Pages/AuthPage/Authpage'
import Home from '../Pages/Home/Home'
import Addnewcourt from '../Pages/Addnewcourt/Addnewcourt'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Authpage />} />
            <Route path='/home' element={<Home />} />


            
            <Route path='/newcourt' element={<Addnewcourt />} />
        </Routes>
    </div>
  )
}

export default Routing