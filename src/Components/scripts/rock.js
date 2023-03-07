import React from 'react'
import '../styles/rock.css'
import Image from 'react-bootstrap/Image'
import iconrock from '../../images/icon-rock.svg'

function Rock() {
  return (
    <div className='User-rock'>
      <Image id='logoImage' src={iconrock}/>
    </div>
  )
}

export default Rock