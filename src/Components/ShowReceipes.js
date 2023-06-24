import React, { useState } from 'react'

function ShowReceipes() {
    const [receipes, setReceipes] = useState([]);

    useState(()=>{
        fetch('http://localhost:2700/showreceipes')
        .then(res=>res.json())
        .then(data=>setReceipes(data))
        .catch(err=>console.log(err))

    }, [])


  return (
    <div>
        {
            receipes.map((receipe, index)=>(
                <li key={index}>{receipe.title}</li>
            ))
        }

    </div>
  )
}

export default ShowReceipes