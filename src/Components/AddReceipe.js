import React from 'react'

function AddReceipe() {
  return (
    <>
        <form action='http://localhost:2700/addreceipe' method='post'>
            <label>
                Title: <input type='text' name='title' placeholder='Add title'/>
            </label>
            <br></br>

            <label>
                Description: <input type='text' name='desc' placeholder='Add description'/>
            </label>
            <br></br>

            <label>
                Ingredients: <input type='text' name='ing' placeholder='Add Ingredients'/>
            </label>
            <br></br>

            <label>
                Instructions: <input type='text' name='ins' placeholder='Add Instructions'/>
            </label>
            <br></br>

            {/* <label>
                Image: <input type='image' name='image' placeholder='Image'/>
            </label> */}
            <br></br>

            <input type='submit' value={'Save'}/>

        </form>
    </>
  )
}

export default AddReceipe