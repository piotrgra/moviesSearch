import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

const Navi = () => {
    const active = {
      color: "red",
      fontWeight: "bold"
    };
  
    return (
      <ul className="menu-left">
        <li><NavLink exact activeStyle={active} to={"/"}>Wyszukiwarka</NavLink></li>
        <li><NavLink exact activeStyle={active} to={"/done"}>Obejrzane</NavLink></li>
        <li><NavLink exact activeStyle={active} to={"/not-done"}>Do obejrzenia</NavLink></li>
      </ul>
    )
  }

export default Navi;