import React from 'react'
import './movielist.css'
const movielist=[]
const Movielist = (props) => {
  return (
    <div className='list'>
      {
        props.item.map((item)=>{
            return <div className='mylist' key={item.title}>
                  <p> {item.title}</p>
                  <div>{item.opening_crawl}</div>
                  <p>{item.release_date}</p>
            </div>
        })
      }
    </div>
  )
}

export default Movielist
