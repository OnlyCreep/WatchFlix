import React from 'react'
import "./styles.css"
import MainLogo from '../MainLogo/MainLogo'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav_mainPage'>
        <ul className="nav_mainPage-opps">
            <div className='nav_mainPage-opps-left_elem'>
            <NavLink className='nav_mainPage-opps-elem' to={"/search"}>Поиск</NavLink>
            <li className='nav_mainPage-opps-elem'>Фильмы</li>
            <li className='nav_mainPage-opps-elem'>Сериалы</li>
            </div>
            <li className='nav_mainPage-opps-logo'>
                <MainLogo />
            </li>
            <NavLink className='nav_mainPage-opps-elem-sign' to={"/sign"}>Войти</NavLink>
            <img src="/images/burgerMenu.svg" alt="" className='nav_mainPage-opps-elem-burger'/>
        </ul>
    </nav>
  )
}
