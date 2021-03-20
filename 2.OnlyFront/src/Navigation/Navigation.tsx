import * as React from 'react';
import { NavLink } from "react-router-dom";

import './styles.css';

const navItems = [
    { url: 'news', title: 'Новости'},
    { url: 'weather', title: 'Прогноз погоды'},
    { url: 'currency', title: 'Валюта'}
]

function Navigation() {
    return (
       <nav className="navContainer"><ul className="navList">
           {navItems.map(item => 
            <li><NavLink to={`/${item.url}`} className="navLink">{item.title}</NavLink></li>
           )}
       </ul></nav> 
    )
}

export default Navigation;
