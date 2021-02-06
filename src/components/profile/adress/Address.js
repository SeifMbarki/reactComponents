import React from 'react'

const Address = () => {
    let add={num:13,street_name:"for real i don't know",postal_code:10000,city:"Tunis",country:"Tunisia"}
    return (
        <>
            <h2>I live in {add.num} {add.street_name} {add.postal_code} {add.city} {add.country}</h2>
        </>
    )
}

export default Address
