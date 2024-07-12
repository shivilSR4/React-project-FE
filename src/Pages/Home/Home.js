import React from 'react'
import './Home.css'
import Cusnavbar from '../../Components/Common/Cusnavbar/Cusnavbar'
import Cuscarousal from 'Components/Cuscurousal/Cuscarousal'
import Blocks from 'Components/Blocks/Blocks'
import Uspblocks from 'Components/Uspblocks/Uspblocks'

function Home() {
  return (
    <div>
        <Cusnavbar />
        <Cuscarousal/>
        <Blocks />
        <Uspblocks />
    </div>
  )
}

export default Home