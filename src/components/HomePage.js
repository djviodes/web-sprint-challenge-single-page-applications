import React from 'react'
import { Link, Route } from 'react-router-dom'
import Form from './Form'
import styled from 'styled-components'

const StyledHomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`

const StyledImage = styled.div`
    width: 100%;
    height: 78vh;
    background-image: url("http://www.napolicentrale.com.au/wp-content/uploads/2014/12/pizza-header.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled.button`
    width: 9vw;
    height: 6vh;
    background-color: #BC160F;
    font-size: 1.5rem;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    &:hover{
        cursor: pointer;
        background-color: #750e09;
        color: #cccccc;
    }
`

const HomePage = () => {
    return (
        <StyledHomeWrapper>
            <StyledImage>
                <Link to='/pizza'>
                    <StyledButton>Order Now</StyledButton>
                </Link>
                <Route path='/pizza' component={Form} />
            </StyledImage>
            <div>
                <h2>Deals</h2>
                
            </div>
        </StyledHomeWrapper>
    )
}

export default HomePage;