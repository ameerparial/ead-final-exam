import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
                <li key={index}><Link to={`/receipedetails/${receipe._id}`}>{receipe.title}</Link></li>
            ))
        }

    </div>
  )
}

export default ShowReceipes

// <li key={index}><Link to={`/receipedetails/${receipe._id}`}>{receipe.title}</Link></li>