import React from 'react'
import '../styles/Paper.css'
import Image from 'react-bootstrap/Image'
import iconpaper from '../../images/icon-paper.svg'


function Paper() {
  return (
    <div className='User-paper'>
        <Image id='logoImage' src={iconpaper}/>
    </div>
  )
}

export default Paper