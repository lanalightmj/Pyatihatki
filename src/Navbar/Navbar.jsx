import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

let c1 = "item";
let c2 = "active";
let classes = c1 + '' + c2;
let classesNew = `${s.item} ${s.active}`;

const Navbar = () => {
	return (
		<nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <a>News</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>
        <div className={s.item}>
          <a>Settins</a>
        </div>
      </nav>
	);
}

export default Navbar;