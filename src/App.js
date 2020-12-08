import React from 'react';
import './App.css';
import styled, {keyframes} from 'styled-components'
import MyButton from './components/Button'

const rotate = keyframes`
  from {
    transform: rotate(0deg):
  }
  to {
    transform: rotate(360deg)
  }
`
const Heading = styled.h1`
  font-size: 2rem;
  // animation: ${rotate} 5s linear infinite;
  color: #333;
`
const Wrapper = styled.div`
  padding: 5rem;
  background-color: #E1E1E1;
`
const Button = styled.button`
  color: ${props => props.color || "black"};
  background: palevioletred;
  padding: ${props => props.primary ? "1.5rem 3rem": "1rem 1.5rem"};
  font-weight: ${props => props.primary ? "800": "400"}
`
const ButtonSecondary = styled(Button)`
  background: tomato;
`
function App() {
  return (
    <div>
      <Wrapper>
        <Heading>This is styled Heading</Heading>
        <Button>Styled Button</Button>
        <Button color="blue" primary>Primary Button</Button>
        <ButtonSecondary>Secondary Button</ButtonSecondary>
        <MyButton />
        <MyButton sweden/>
      </Wrapper>
    </div>
  );
}

export default App;
