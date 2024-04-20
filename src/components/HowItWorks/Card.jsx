import React from 'react'
import './Card.css'

const Card = ({img, alt, h, num}) => {
  return (
    <div className='card-container'>
            <h1>{num}</h1>
            <img src={img} alt={alt}></img>
            <h6>{h}</h6>
            {/* <p>{p}</p> */}
    </div>
  )
}

export default Card