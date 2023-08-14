import React from 'react'
import './Counter.css'
import { useState } from 'react'
import {BiPlusCircle, BiMinusCircle} from "react-icons/bi";
import Header from '../Header/Header';

const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <>
    <div className='counter'>
        <h2 className='counter__title'>Counter</h2>
        <p className='counter__number'>{count}</p>
        <button onClick={() => setCount(count-1)} className='counter__bt-mi'><BiMinusCircle /></button>
        <button onClick={() => setCount(count+1)} className='counter__bt-pl'><BiPlusCircle /></button>
    </div>
    </>
  )
}

export default Counter