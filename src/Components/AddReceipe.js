import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function AddReceipe() {
    const [data, setData]= useState({
        title:'',
        des:'',
        ins:'',
        ing:'',
    })
    // const [currentData, setCurrentData] = useState({});
    const params = useParams();
    useEffect(()=>{
        const {id} = params;
        if(id===undefined){
            return;
        }
        console.log('ID in update aadd re' + id);
        fetch(`http://localhost:2700/receipeupdate/${id}`).then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err));
    },[]);

    const handler = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setData({...data, [key]:value});
    }
  return (
    <>
        <form method='post'>
            <label>
                Title: <input type='text' name='title' value={data?.title} onChange={handler} placeholder='Add title'/>
            </label>
            <br></br>

            <label>
                Description: <input type='text' name='des' value={data?.des} onChange={handler} placeholder='Add description'/>
            </label>
            <br></br>

            <label>
                Ingredients: <input type='text' name='ing'  value={data?.ing} onChange={handler} placeholder='Add Ingredients'/>
            </label>
            <br></br>

            <label>
                Instructions: <input type='text' name='ins' value={data?.ins} onChange={handler} placeholder='Add Instructions'/>
            </label>
            <br></br>

            {/* <label>
                Image: <input type='image' name='image' placeholder='Image'/>
            </label> */}
            <br></br>

            <input type='submit' formAction='http://localhost:2700/addreceipe' value={'Save'}/>
            
            <input type='submit' formAction={`http://localhost:2700/updateme/${data?._id}`} value={'Update'}/>


        </form>
    </>
  )
}

export default AddReceipe