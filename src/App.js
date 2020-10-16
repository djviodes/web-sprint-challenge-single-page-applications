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

const App = () => {
  return (
    <StyledApp>
      <StyledNavBar>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/pizza'>
            <button>Pizza</button>
          </Link>
        </div>
      </StyledNavBar>
      <Route exact path='/' component={HomePage} />
      <Route path='/pizza' component={Form} />
    </StyledApp>
  );
};
export default App;
