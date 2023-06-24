import React, { useEffect, useState } from 'react'
import { useParams , Link} from 'react-router-dom';

function ReceipeDetails() {
  const params = useParams();
  console.log(params);
    const [receipe, setReceipe] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:2700/receipedetails/${params.id}`)
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
        <label><Link to={`http://localhost:2700/receipeupdate/${receipe._id}`}>Update</Link></label>
        <label><Link to={`http://localhost:2700/receipedelete/${receipe._id}`}>Delete</Link></label>
    </>
    
  )
}

export default ReceipeDetails;