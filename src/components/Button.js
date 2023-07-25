import React, { useEffect, useState ,useCallback} from 'react'
import './button.css'
import Movielist from './Movielist'
import Myform from './forms/Myform'

const Button = () => {
    const [movies,setmovies]=useState([])
    const [isloding,setisloding]=useState(false)
    const [error,seterror]=useState(null)
    const [clearint,setclearint]=useState(false)

   const  datahandler= (movies)=>{
    console.log("kb")
   fetch("https://react-http-471b4-default-rtdb.firebaseio.com/movies.json",{
      method:"POST",
      body:JSON.stringify(movies),
      headers:{
          'Content-Type':'application/json'
      }
  })
  
   }
    const fetchmoviedata=async ()=>{
                setisloding(true)
                seterror(null)
                try{
                  
                  const response= await fetch("https://react-http-471b4-default-rtdb.firebaseio.com/movies.json")
                  console.log(response)
                  if(!response.ok){
                    throw new Error("something went wrong...")
                  }
                  if (response.ok){
                    setclearint(true)
                  }
                  const data= await response.json()
                  const loadedmovies=[]
                  for(const key in data){
                    loadedmovies.push({
                      title:data[key].title,
                      description:data[key].desciption,
                      date:data[key].date
                    })
                  }
                  console.log(loadedmovies)
                       setmovies(loadedmovies)
                       
                       
                } catch(error){
                  seterror(error.message)
                }
                setisloding(false)
        }
        
        const errorhandler=()=>{
          console.log("kb")
          setclearint(true)
        }

console.log(movies)
   
  return (
    <React.Fragment>
      <Myform onadddata={datahandler}></Myform>
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
