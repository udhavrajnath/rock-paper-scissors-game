import React, { useState } from 'react'
import '../styles/Game.css'
import Image from 'react-bootstrap/Image'
import testpaperI from '../../images/icon-paper.svg'
import CloseIcon from '@mui/icons-material/Close';
import rulesLogo from '../../images/image-rules.svg'

function Game() {
    const [modalValue,setModalValue]=useState(false)

    function HandleClickModal(val){
        setModalValue(val)
    }
  return (
    <div className='container-fluid'>
        <div className='Game'>
            <div className='gameScore'>
                <div className='scoreBox'>
                    <div className='gameName'>
                        <h3>ROCK<br/>PAPER<br/>SCISSORS</h3>
                    </div>
                    <div className='score'>
                        <div className='scoreText'><p>score</p></div>
                        <div className='Number'></div>
                    </div>
                </div>
            </div>
            <div className='gamePlay'>
                <div className='playBox'>

                </div>
            </div>
            <div className='gameRule'>
                <div className='ruleBox'><button onClick={()=>HandleClickModal(true)}>Rules</button></div>
            </div>
        </div>
        <div className={(modalValue==true)?'rulesModalActive':'rulesModal'}>
            <div className='rules'>
                <div className='title'>
                    <div className='RulesTitle'><p>RULES</p></div>
                    <div className='close'><CloseIcon id='closebtn' onClick={()=>HandleClickModal(false)}/></div>
                </div>
                <div className='display'><Image id='Img' fluid={true} src={rulesLogo}/></div>
            </div>
        </div>
    </div>
  )
}

export default Game