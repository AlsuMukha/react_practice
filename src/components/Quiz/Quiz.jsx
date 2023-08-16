import React from 'react'
import './Quiz.css'
import { useState } from 'react';



const Quiz = ({prosent, question, step, onClickVariant}) => {

  return (
    <div className='quiz'>
        <div className="progress">
            <div style={{ width:`${prosent}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {question.variants.map((variants, index) => <li onClick={() => onClickVariant(index)} key={variants}>{variants}</li>)}  
        </ul>
    </div>
  )
}

export default Quiz