import React from 'react'
import './Modal.css'
import modal_win_img from './modal-win-img.jpg';
import { useState } from 'react';
import {BiXCircle} from "react-icons/bi";

const Modal = () => {
const [modal, showModal] = useState(false)

  return (
    <div className='modal'>
        <button onClick={() => showModal(!modal)} className='modal__btn'>Нажми и улыбнись</button>
        { modal &&
        <div className='overplay'>
            <div className='modal__win'>
                <button onClick={() => showModal(!modal)}><BiXCircle /></button>
                <img src={modal_win_img}></img>
            </div>
        </div>
        }
    </div>
  )
}

export default Modal