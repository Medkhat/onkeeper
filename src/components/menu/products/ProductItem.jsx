import React from "react";
import m from "../Menu.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ProductItem = (props) => {
    return (
        <div className={m.item_card}>
            <img src={props.image} alt="PRODUCT_IMG" />
            <NavLink to={`${props.href}`} className={m.product_name}>
                {props.name}
            </NavLink>
            <span className={m.times}>
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{ backgroundColor: "#fff", borderRadius: "50%" }}
                />
            </span>
        </div>
    );
};

export default ProductItem;
