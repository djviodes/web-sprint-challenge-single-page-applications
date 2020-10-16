import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const formSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    size: yup.string().required('Please select a size'),
})

const Form = (props) => {
    const [pizza, setPizza] = useState({
        name: '',
        size: '',
        toppings: [],
        instructions: ''
    })

    const [errorState, setErrorState] = useState({
        name: '',
        size: '',
    })

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        formSchema.isValid(pizza).then(valid => setDisabled(!valid))
    }, [pizza])

    const validate = (event => {
        yup.reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then( valid => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: ''
                })
            })
            .catch( error => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: error.errors[0]
                })
            })
    })

    const changeHandler = (event) => {
        event.persist();
        validate(event)
        setPizza({...pizza, [event.target.name]: event.target.value});
    }

    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input
                data-cy='name'
                id='name'
                type='text'
                name='name'
                placeholder='Please Enter Your Full Name'
                value={pizza.name}
                onChange={changeHandler}
            />
            {errorState.name.length > 1 ? <p>{errorState.name}</p> : null}

            <label htmlFor='size'>Select Your Size:</label>
            <select data-cy='size' id='size' name='size' value={pizza.size} onChange={changeHandler}>
                <option value=''>--Please Choose A Size--</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='xlarge'>Extra Large</option>
            </select>
            {errorState.size.length > 0 ? <p>{errorState.size}</p> : null}

            <label htmlFor='toppings'>Toppings:</label>
            <select data-cy='toppings' id='toppings' name='toppings' value={pizza.toppings} onChange={changeHandler} multiple>
                <option value=''>--Please Choose Some Toppings--</option>
                <option value='cheese'>Cheese</option>
                <option value='bacon'>Bacon</option>
                <option value='peppers'>Bell Peppers</option>
                <option value='olives'>Black Olives</option>
                <option value='mushrooms'>Mushrooms</option>
                <option value='pepperoni'>Pepperoni</option>
                <option value='redSauce'>Red Sauce</option>
                <option value='whiteSauce'>White Sauce</option>
            </select>

            <label htmlFor='instructions'>Special Instructions</label>
            <textarea
                data-cy='instructions'
                id='instructions'
                name='instructions'
                placeholder='Enter Any Special Instructions'
                value={pizza.instructions}
                onChange={changeHandler}
            />

            <button data-cy='submit' type='submit' disabled={disabled}>Order</button>
        </form>
    )
}

export default Form;