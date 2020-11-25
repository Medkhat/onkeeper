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
        props.setCurrentCategory(props.categoryId);
        props.getOneCategoryProducts(props.categoryId);
    };

    const onDeleteCategoryClick = () => {
        props.setConfirmModalState(true);
        // props.deleteCategory(props.categoryId)
    };

    return (
        <>
            <div
                className={`${styles.item_block} ${
                    props.currentCategory === props.categoryId && styles.active
                }`}
            >
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
                    <button type="button" onClick={onDeleteCategoryClick}>
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            style={{
                                fontSize: "16px",
                            }}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default CategoryItem;
