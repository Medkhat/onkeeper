import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../Menu.module.css";
import CategoryItem from "./CategoryItem";

const Categories = (props) => {
    let categoryItems = props.categories.map((item) => {
        return (
            <CategoryItem name={item.name} key={item.id} categoryId={item.id} />
        );
    });

    const onAddCategoryBtnClick = () => {
        props.setModalState(true);
    };

    return (
        <>
            <div className={styles.category_block}>
                <h3 className={styles.title}>
                    <span>Категории</span>
                    <span
                        className={styles.iconAsBtn}
                        onClick={onAddCategoryBtnClick}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span>
                </h3>
                <div className={styles.category_items}>{categoryItems}</div>
            </div>
        </>
    );
};

export default Categories;
