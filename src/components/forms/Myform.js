import React from 'react'
import './myform.css'
import { useState } from 'react'
const Myform = (props) => {
const [title,settitle]=useState('')
const [desciption,setdesciption]=useState('')
const [date,setdate]=useState('')
const titlehandler=(e)=>{
settitle(e.target.value)
}
const descriptionhandler=(e)=>{
    setdesciption(e.target.value)
}
const datehandler=(e)=>{
    setdate(e.target.value)
}
const submithandler=()=>{
    const obj={
        title:title,
        desciption:desciption,
        date:date
    }
    props.onadddata(obj)
}

  return (
    <div className='myform'>
        <form onSubmit={submithandler}>
      <label>Title</label><br></br>
      <input onChange={titlehandler} type="text" /><br></br>
      <label >Description </label><br></br>
      <textarea onChange={descriptionhandler} className='description' rows="7" cols="50" type="text" /><br></br>
      <label>Release date </label><br></br>
      <input onChange={datehandler} type="text" /><br></br>
      <button type='submit'>Add Movie</button>
      </form>
    </div>
  )
}

export default Myform
