import React, {useState} from 'react'
import {ButtonStyled} from './ButtonStyled'

export default function Button(props) {
  const [counter, setCounter] = useState(0)

  function handleOnClick() {
    setCounter(counter + 1)
  }

  return (
    <ButtonStyled 
      onClick={handleOnClick} 
      sweden={props.sweden}
      counter={counter}
    >
      My Button
    </ButtonStyled>
  )
}
