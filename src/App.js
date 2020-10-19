import React from "react";
import { Link, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import Form from './components/Form'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

const StyledButtonContainer = styled.div`
  width: 11%;
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled.button`
  width: 4vw;
  height: 3vh;
  background-color: #BC160F;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  &:hover{
    cursor: pointer;
    background-color: #750e09;
    color: #cccccc;
  }
`

const App = () => {
  return (
    <StyledApp>
      <StyledNavBar>
        <h1>Lambda Eats</h1>
        <StyledButtonContainer className='nav-links'>
          <Link to='/'>
            <StyledButton>Home</StyledButton>
          </Link>
          <Link to='/pizza'>
            <StyledButton>Order</StyledButton>
          </Link>
        </StyledButtonContainer>
      </StyledNavBar>
      <Route exact path='/' component={HomePage} />
      <Route path='/pizza' component={Form} />
    </StyledApp>
  );
};
export default App;
