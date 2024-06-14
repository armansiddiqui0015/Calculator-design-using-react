import { Button } from 'bootstrap'
import React from 'react'

const BtnContainer = ({ButtonNames}) => {
  let clickBtnShowInput = () =>{
    
  }
  return (
    <div>
      {ButtonNames.map((btnitem) => (<button id={btnitem} className='btnn' onClick={
        () => clickBtnShowInput()
      }>{btnitem}</button>))}
    </div>
  )
}

export default BtnContainer
 