import React from 'react'
import './Quiz.css'
import final from './final_img.jpg';

const Result = ({correct, questions}) => {
  return (
    <div className='quiz'>
        <div className="result">
            <img src={final} />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href='./'>
            <button>Попробовать снова</button>
            </a>
        </div>
    </div>
  )
}

export default Result