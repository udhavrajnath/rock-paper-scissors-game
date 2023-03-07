import React, { useEffect } from 'react'
import Paper from '../../Components/scripts/Paper'
import Rock from '../../Components/scripts/rock'
import Scissors from '../../Components/scripts/scissors'
import '../styles/ComputerChoice.css'

function ComputerChoice(props) {
  return (
    <>{(props.userselected==true)&&<div className='ComputerChoiceClass'>
        <div className='userPick'>
            <div><p>You picked</p></div>
            <div className='pickedLogo'>{(props.userPick=='paper')?<Paper/>:(props.userPick=='rock')?<Rock/>:<Scissors/>}</div>
        </div>
        <div className='computerPicking'>
            <div><p>The house picked</p></div>
            <div className='LoadingLogo'>{(props.computerPick==1)?<Rock/>:(props.computerPick==2)?<Paper/>:<Scissors/>}</div>
        </div>
    </div>}</>
  )
}

export default ComputerChoice