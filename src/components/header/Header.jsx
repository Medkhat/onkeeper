import React from 'react'
import h from './Header.module.css'

const NavigationItem = (props) => {
  return(
    <p className={h.item}>{props.title}</p>
  );
}

const Header = () => {
  return(
    <header>
      <div className={h.logo}>On-Keeper</div>
      <nav>
        <NavigationItem title="Меню"/>
        <NavigationItem title="Персонал"/>
        <NavigationItem title="Заказы"/>
      </nav>
      <div className="admin_btn"> 
        <span>Администратор</span>
      </div>
    </header>
  );
}

export default Header;
