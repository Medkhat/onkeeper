import React, { useEffect } from "react";
import styles from "./Menu.module.css";
import CategoriesContainer from "./categories/CategoriesContainer";
import ProductsContainer from "./products/ProductsContainer";
import { SkeletonCard } from "../common/preloader/Preloader";

const Menu = React.memo(({ getCategories, getProducts, ...props }) => {
    useEffect(() => {
        getProducts();
        getCategories();
    }, [getCategories, getProducts]);
    return (
        <div className={styles.content}>
            <CategoriesContainer />
            <div className={styles.menu_content}>
                {props.isFetching ? <SkeletonCard /> : <ProductsContainer />}
            </div>
        </div>
    );
});

export default Menu;
