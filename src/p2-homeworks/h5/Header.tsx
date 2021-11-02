import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../h5/HW5.module.css'

function Header() {
    return (
        <div className={style.header} >
            <div className={style.links}><NavLink to={'/pre-junior'} activeClassName={style.active}> Jun </NavLink></div>
            <div className={style.links}><NavLink to={'/error404'}activeClassName={style.active}> Jun+ </NavLink></div>
            <div>menu</div>
        </div>
    )
}

export default Header
