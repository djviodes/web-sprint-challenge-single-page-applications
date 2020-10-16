import React from 'react'
import { Link, Route } from 'react-router-dom'
import Form from './Form'
import styled from 'styled-components'

const StyledHomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const StyledImage = styled.img`
    width: 100%;
`

const StyledButton = styled.button`
    height: 5vh;
    background-color: #BC160F;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        background-color: #4F4B14;
    }
`

const HomePage = () => {
    return (
        <StyledHomeWrapper>
            <StyledImage
                className='home-image'
                src='http://www.napolicentrale.com.au/wp-content/uploads/2014/12/pizza-header.jpg'
                alt='Yummy Pizza'
            />
            <Link to='/pizza'>
                <StyledButton>Pizza?</StyledButton>
            </Link>
            <Route path='/pizza' component={Form} />
        </StyledHomeWrapper>
    )
}

export default HomePage;