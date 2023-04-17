import React from 'react'
import aboutImg from '../Images/aboutReact.jpg';

export default function About() {
  return (
    <>
      <div className='todoContainer mt-5'>
       <h1>This is About page.</h1>      
      </div>

       <div className='todoContainer mt-5'>
           <img src={aboutImg}></img>
       </div>
    </>
  )
}
