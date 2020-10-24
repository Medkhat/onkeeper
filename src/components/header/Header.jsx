import React from "react";
import h from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";

const NavigationItem = (props) => {
    const isActivePage = (path) => {
        return window.location.pathname === path;
    };
    return (
        <NavLink
            to={`${props.href}`}
            isActive={() => isActivePage(props.href)}
            className={h.item}
            activeClassName={h.active}
        >
            {props.title}
        </NavLink>
    );
};

const Header = (props) => {
    return (
        <header>
            <div className={h.logo}>On-Keeper</div>
            <nav>
                <NavigationItem title="Меню" href="/products" />
                <NavigationItem title="Заказы" href="/orders" />
                <NavigationItem title="Персонал" href="/personal" />
            </nav>
            <div className={h.admin_btn}>
                <span onClick={props.logout}>Выйти</span>
            </div>
        </header>
    );
};
let mapStateToProps = () => ({});

export default connect(mapStateToProps, { logout })(Header);
