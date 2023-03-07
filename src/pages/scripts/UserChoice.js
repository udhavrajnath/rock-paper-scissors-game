import React from 'react'
import '../styles/UserChoice.css'
import Paper from '../../Components/scripts/Paper'
import Rock from '../../Components/scripts/rock'
import Scissors from '../../Components/scripts/scissors'
import ComputerPicking from '../../Components/scripts/ComputerPicking'


function UserChoiceComponent(props) {
  return (
    <div className='userChoiceClass'>
        <div className='userPick'>
            <div><p>You picked</p></div>
            <div className='pickedLogo'>{(props.userPick=='paper')?<Paper/>:(props.userPick=='rock')?<Rock/>:<Scissors/>}</div>
        </div>
        <div className='computerPicking'>
            <div><p>The house picked</p></div>
            <div className='LoadingLogo'><ComputerPicking/></div>
        </div>
    </div>
  )
}

export default UserChoiceComponent