import React, { useState } from 'react'
import './button.css'
import Movielist from './Movielist'
const Button = () => {
    const [movies,setmovies]=useState([
    ])
    const [isloding,setisloding]=useState(false)
    const fetchmoviedata=()=>{
        setisloding(true)
        console.log("kb")
        fetch("https://swapi.dev/api/films/")
        .then((response)=>{
            return response.json()})
        .then((data)=>{
            setisloding(false)
            setmovies(data.results)
        })
    }
  return (
    <React.Fragment>
    <div className='button'>
      <button onClick={fetchmoviedata}>Fetch movies</button>
    </div>
    <div className='movie'>
   {isloding ? <p>Data is Loading</p> :<Movielist item={movies}></Movielist> }
    </div>
    </React.Fragment>
  )
}

export default Button
