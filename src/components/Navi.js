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
        <li><NavLink exact activeStyle={active} to={"/watched"}>Obejrzane</NavLink></li>
        <li><NavLink exact activeStyle={active} to={"/planed"}>Do obejrzenia</NavLink></li>
      </ul>
    )
  }

export default Navi;