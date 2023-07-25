import React from 'react'
import './movielist.css'
const movielist=[]
const Movielist = (props) => {
  return (
    <div className='list'>
      {
        props.item.map((item)=>{
            return <div className='mylist' key={item.id}>
                  <h2> {item.title}</h2>
                  <div>{item.description}</div>
                  <p>{item.date}</p>
            </div>
        })
      }
    </div>
  )
}

export default Movielist
