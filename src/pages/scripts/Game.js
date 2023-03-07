import React, { useState,useEffect } from 'react'
import '../styles/Game.css'
import Image from 'react-bootstrap/Image'
import CloseIcon from '@mui/icons-material/Close';
import rulesLogo from '../../images/image-rules.svg'
import iconpaper from '../../images/icon-paper.svg'
import iconrock from '../../images/icon-rock.svg'
import iconscissors from '../../images/icon-scissors.svg'
import triangle from '../../images/bg-triangle.svg'
import gameLogo from '../../images/logo.svg'
import UserChoiceComponent from './UserChoice';
import ComputerChoice from './ComputerChoice';




function Game() {
    const [modalValue,setModalValue]=useState(false)
    const [score,setScore]=useState(0)
    const [computerchose,setComputerchose]=useState(0)
    const [userChoice,setUserChoice]=useState('')
    const [playAgain,setPlayAgain]=useState(false)
    const [firsAttempt,setFirstAttempt]=useState(true)
    const [computerPicked,setComputerPicked]=useState(false)
    const [userPicked,setUserPicked]=useState(false)
    const [result,setResult]=useState('')

    function HandleClickModal(val){
        setModalValue(val)
    }

    function gameLogic(){
        var randNum =  Math.floor(Math.random() * 3) + 1;
        setComputerchose(randNum)
    }

    function ScoreBoard(){
        switch(computerchose){
            case 1:
                if(userChoice=='rock'){
                    setScore(score)
                    setResult('Draw')
                }else if(userChoice=='scissors'){
                    if(score>0){
                    setScore(score-1)
                    }
                    setResult('You Lose')
                }else{
                    setScore(score+1)
                    setResult('You Win')
                }
                break;
            case 2:
                if(userChoice=='paper'){
                    setScore(score)
                    setResult('Draw')
                }else if(userChoice=='rock'){
                    if(score>0){
                    setScore(score-1)
                    }
                    setResult('You Lose')
                }else{
                    setScore(score+1)
                    setResult('You Win')
                }
                break;
            case 3:
                if(userChoice=='scissors'){
                    setScore(score)
                    setResult('Draw')
                }else if(userChoice=='paper'){
                    if(score>0){
                    setScore(score-1)
                    }
                    setResult('You Lose')
                }else{
                    setScore(score+1)
                    setResult('You Win')
                }
                break;
        }
    }

    function resetAll_PlayAgain(){
        setPlayAgain(false);
        setFirstAttempt(true);
        setUserChoice('');
        setComputerPicked(false);
        setUserPicked(false)
        setResult('')

    }
    function UserSelect(val){
        setFirstAttempt(false)
        setUserChoice(val)
        setUserPicked(true)
        gameLogic()
    }
    useEffect(()=>{
      setTimeout(() => {
        setComputerPicked(true)
        ScoreBoard()
      }, 3000);
    },[userPicked])
  return (
    <div className='container-fluid'>
        <div className='Game'>
            <div className='gameScore'>
                <div className='scoreBox'>
                    <div className='gameName'>
                        <Image src={gameLogo}/>
                    </div>
                    <div className='playAgain-results'>
                        {(computerPicked==true)&&<><div>{result}</div>
                        <div><button onClick={()=>resetAll_PlayAgain()}>Play Again</button></div></>}
                    </div>
                    <div className='score'>
                        <div className='scoreText'><p>score</p></div>
                        <div className='Number'>{score}</div>
                    </div>
                </div>
            </div>
            <div className='gamePlay'>
            {(playAgain==false && firsAttempt==true)&&<div className='playBox'>
                    <div className='paper-scissors'>
                        <div className='paper' onClick={()=>UserSelect('paper')}><Image id='logoImage' src={iconpaper}/></div>
                        <div className='scissors' onClick={()=>UserSelect('scissors')}><Image src={iconscissors} id='logoImage'/></div>
                    </div>
                    <div className='triangle'>
                        <div className='triangleImg'><Image id='tri-logo' fluid={true} src={triangle}/></div>
                    </div>
                    <div className='rock'>
                        <div className='rockIcon' onClick={()=>UserSelect('rock')}><Image id='logoImage' src={iconrock}/></div>
                    </div>
                </div>}
                {(userChoice!==''&&computerPicked==false)&&<div className='UserSelecting'>
                    <UserChoiceComponent userPick={userChoice}/>
                </div>}

                {(computerPicked==true && userPicked==true)&&<div className='ComputerSelected'>
                    <ComputerChoice userselected={userPicked} userPick={userChoice} computerPick={computerchose}/>
                </div>}

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