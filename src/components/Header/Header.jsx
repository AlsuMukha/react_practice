import React from 'react'
import './Header.css'
import {BiMenu} from 'react-icons/bi'
import { useState } from 'react'


const Header = () => {
  const [nav, setNav] = useState(false)
  return (
    <header className='header'>
        <div className='header__container'>
            <div className='header__lodo'>
              <span>Logotip</span>
            </div>
            <div className='header__item'>
                <ul className={nav ? 'active' : ''}>
                    <li>Home</li>
                    <li>PRODUCT</li>
                    <li>STORE</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div onClick={() => setNav(!nav)} className='header__menu-icons'>
              <BiMenu />
            </div>
        </div>
    </header>
  )
}

export default Header