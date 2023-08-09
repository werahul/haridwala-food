import React from 'react'
import '../css/Comp.css'


const Card = (props) => {
  return (
   <>
    <div className="main">
        <div className="img">
            <img src={props.img} alt="menu" />
        </div>
        <div className="title">
            <h1>{props.name}</h1>
            <p>{props.dic}</p>
        </div>
        <div className="price_order">
            <button className='btn btn-green'>{props.rate}<span>★</span></button>
            <p><span>₹ </span>{props.amount}</p>
            <button className='btn btn-blue'>Order Now</button>
        </div>
    </div>
   </>
  )
}

export default Card
