import React from 'react'

const Confirmation = (props) => {
    const { name, size, toppings, instructions } = props

    return (
        <div>
            <p>Thank you for ordering!</p>
            <h1>{name}</h1>
            <p>{size}</p>
            <p>{toppings}</p>
            <p>{instructions}</p>
        </div>
    )
}

export default Confirmation;