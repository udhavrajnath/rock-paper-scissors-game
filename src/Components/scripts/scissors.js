import React from 'react'
import '../styles/scissors.css'
import Image from 'react-bootstrap/Image'
import iconscissors from '../../images/icon-scissors.svg'

function Scissors() {
  return (
    <div className='User-scissors'>
      <Image id='logoImage' src={iconscissors}/>
    </div>
  )
}

export default Scissors