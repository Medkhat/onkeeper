import React from "react";
import styles from "../Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const CategoryItem = (props) => {
    const onEditCategoryClick = () => {
        props.editCategoryItem(props.categoryId);
        props.setModalState(true);
    };

    const onCategoryItemClick = () => {
        props.getOneCategoryProducts(props.categoryId);
    };

    return (
        <div className={styles.item_block} id={props.categoryId}>
            <p className={styles.item} onClick={onCategoryItemClick}>
                {props.name}
            </p>
            <div className={styles.item_btns}>
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
