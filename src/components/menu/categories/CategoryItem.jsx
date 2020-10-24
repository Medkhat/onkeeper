import React from "react";
import m from "../Menu.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const CategoryItem = (props) => {
    const onEditCategoryClick = () => {
        props.editCategoryItem(props.categoryId);
        props.setModalState(true);
    };

    return (
        <div className={m.item_block} id={props.categoryId}>
            <NavLink to={"/products/" + props.categoryId} className={m.item}>
                {props.name}
            </NavLink>
            <div className={m.item_btns}>
                <button type="button" onClick={onEditCategoryClick}>
                    <FontAwesomeIcon
                        icon={faPencilAlt}
                        style={{
                            fontSize: "16px",
                        }}
                    />
                </button>
                <button
                    type="button"
                    onClick={() => props.deleteCategory(props.categoryId)}
                >
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        style={{
                            fontSize: "16px",
                        }}
                    />
                </button>
            </div>
        </div>
    );
};

export default CategoryItem;
