import React from 'react'
import '../css/Comp.css'

const BoxText = (props) => {
    return (
        <>
            <div className="text">
                <h1>{props.myTxt}</h1>
                <h4>{props.para}</h4>
                <button>{props.btns}</button>
            </div>
        </>
    )
}

export default BoxText
