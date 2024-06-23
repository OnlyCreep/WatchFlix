import React from 'react'
import "./styles.css"
import { Link, NavLink } from 'react-router-dom'

export default function NavMinor() {
  return (
    <nav className='nav_minor'>
        <ul className="nav_minor-opps">
            <Link to={"/"} className="nav_minor-oops-logo">
                <span className='logo_part'>Watch</span>
                <span className='logo_part'>Flix</span>
            </Link>
            <NavLink to={"/search"} className="nav_minor-oops-elem">Поиск</NavLink>
            <li className="nav_minor-oops-elem">Фильмы</li>
            <li className="nav_minor-oops-elem">Сериалы</li>
            <NavLink to={"/sign"} className="nav_minor-oops-sign">Войти</NavLink>
            <img className="burger_menu" src='/images/burgerMenu.svg' alt=''></img>
        </ul>
    </nav>
  )
}
