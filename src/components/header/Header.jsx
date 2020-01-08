import React from 'react';
import h from './Header.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  const isActivePage = (path) => {
    return window.location.pathname === path;
  }
  return (
    <NavLink
      to={props.href}
      isActive={() => isActivePage(props.href)}
      className={h.item}
      activeClassName={h.active}
    >
      {props.title}
    </NavLink>
  );
}

const Header = () => {
  return (
    <header>
      <div className={h.logo}>
        On-Keeper
      </div>
      <nav>
        <NavigationItem title="Меню" href="/" />
        <NavigationItem title="Заказы" href="/orders" />
        <NavigationItem title="Персонал" href="/personal" />
      </nav>
      <div className="admin_btn">
        <span>Администратор</span>
      </div>
    </header>
  );
}

export default Header;
