import React, { useEffect, useState ,useCallback} from 'react'
import './button.css'
import Movielist from './Movielist'

const Button = () => {
    const [movies,setmovies]=useState([])
    const [isloding,setisloding]=useState(false)
    const [error,seterror]=useState(null)
    const [clearint,setclearint]=useState(false)

    const fetchmoviedata=async ()=>{
                setisloding(true)
                seterror(null)
                try{
                  
                  const response= await fetch("https://swapi.dev/api/films/")
                  if(!response.ok){
                    throw new Error("something went wrong...")
                  }
                  if (response.ok){
                    setclearint(true)
                  }
                  const data= await response.json()
                       setmovies(data.results)
                       
                       
                } catch(error){
                  seterror(error.message)
                }
                setisloding(false)
        }
        
        const errorhandler=()=>{
          console.log("kb")
          setclearint(true)
        }

    useEffect(()=>{
      let intervalId;
      console.log(clearint)
      if (!clearint || movies.length<0){
        intervalId=  setInterval(()=>{
          fetchmoviedata()
        },  1000)
      }
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
          console.log('Interval has been stopped.');
        }
      };
   
    },[clearint,fetchmoviedata])
   
  return (
    <React.Fragment>
    <div className='button'>
      <button onClick={fetchmoviedata}>Fetch movies</button>
      <button onClick={errorhandler}>Cancel fetching</button>
    </div>
    <div className='movie'>
   {isloding  && <p>Data is Loading...</p> }
   {!isloding && <Movielist item={movies}></Movielist> }
   {!isloding && error && <p style={{textAlign:"center"}}>{error}</p>}
    </div>
    </React.Fragment>
  )
}

export default Button
