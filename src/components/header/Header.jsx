import React from 'react';
import h from './Header.module.css';
import {NavLink} from 'react-router-dom';

const NavigationItem = (props) => {
  return(
    <NavLink to={props.href} className={h.item} activeClassName={h.active}>{props.title}</NavLink>
  );
}

const Header = () => {
  return(
    <header>
      <div className={h.logo}>On-Keeper</div>
      <nav>
        <NavigationItem title="Меню" href="/menu"/>
        <NavigationItem title="Персонал" href="/personal"/>
        <NavigationItem title="Заказы" href="/orders" />
      </nav>
      <div className="admin_btn"> 
        <span>Администратор</span>
      </div>
    </header>
  );
}

export default Header;
