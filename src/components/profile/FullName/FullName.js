import React from 'react'

const FullName = () => {
    let name={firstname:"Mohamed Seif", lastname:"Mbarki"}
    return (
        <>
          <h1>Hi i'm {name.firstname} {name.lastname}</h1>
        </>
    )
}

export default FullName
