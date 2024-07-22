import React from 'react'
import courtimg from '../../Assets/champions-league-stadium-football-sports-game-soccer-stadium-wallpaper-preview.jpg'
import './Cards.css'
import { useNavigate } from 'react-router-dom'


function Cards() {
    const navigate = useNavigate()
  return (
    <div className='card' onClick={()=>{navigate('/courts/courtdetails')}}>
        <img src={courtimg} alt='' />

        <div className='card-body'>
            <h3>
                    CourtName
            </h3>
            <p>
                location <br />
                lets play the game
            </p>

        </div>

    </div>
  )
}

export default Cards