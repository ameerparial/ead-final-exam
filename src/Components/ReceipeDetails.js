import React, { useEffect, useState } from 'react'

function ReceipeDetails() {
    const [receipe, setReceipe] = useState({});

    useEffect(()=>{
        fetch('http://localhost:2700/receipedetails')
        .then(res=>res.json())
        .then(data=>setReceipe(data))
        .catch(err=>console.log(err))

    }, [])
  return (
    <>
        <h1>Complete Details</h1>
        <h3>Title:{receipe?.title}</h3>
        <h3>description:{receipe?.des}</h3>
        <h3>Ingredients:{receipe?.ing}</h3>
        <h3>Instructions:{receipe?.ins}</h3>
    </>
    
  )
}

export default ReceipeDetails;