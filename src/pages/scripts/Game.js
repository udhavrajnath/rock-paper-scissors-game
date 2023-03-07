import React, { useState } from 'react'
import '../styles/Game.css'
import Image from 'react-bootstrap/Image'
import testpaperI from '../../images/icon-paper.svg'
import CloseIcon from '@mui/icons-material/Close';
import rulesLogo from '../../images/image-rules.svg'
import iconpaper from '../../images/icon-paper.svg'
import iconrock from '../../images/icon-rock.svg'
import iconscissors from '../../images/icon-scissors.svg'
import triangle from '../../images/bg-triangle.svg'
import gameLogo from '../../images/logo.svg'




function Game() {
    const [modalValue,setModalValue]=useState(false)
    const [score,setScore]=useState(0)
    const [userChoice,setUserChoice]=useState('')

    function HandleClickModal(val){
        setModalValue(val)
    }
  return (
    <div className='container-fluid'>
        <div className='Game'>
            <div className='gameScore'>
                <div className='scoreBox'>
                    <div className='gameName'>
                        <Image src={gameLogo}/>
                    </div>
                    <div className='score'>
                        <div className='scoreText'><p>score</p></div>
                        <div className='Number'>0</div>
                    </div>
                </div>
            </div>
            <div className='gamePlay'>
                <div className='playBox'>
                    <div className='paper-scissors'>
                        <div className='paper'><Image id='logoImage' src={iconpaper}/></div>
                        <div className='scissors'><Image src={iconscissors} id='logoImage'/></div>
                    </div>
                    <div className='triangle'>
                        <div className='triangleImg'><Image id='tri-logo' fluid={true} src={triangle}/></div>
                    </div>
                    <div className='rock'>
                        <div className='rockIcon'><Image id='logoImage' src={iconrock}/></div>
                    </div>
                </div>
            </div>
            <div className='gameRule'>
                <div className='ruleBox'><button id='rulesBtn' onClick={()=>HandleClickModal(true)}>Rules</button></div>
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