import React from 'react'
import '../css/Comp.css'

const BoxImg = (props) => {
  return (
    <>
    <div className='imgsec'> <img src={props.myImg} alt="Door Step Delivery" /></div>
    </>
  )
}

export default BoxImg
