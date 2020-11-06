import React, { useEffect } from "react";
import styles from "./Menu.module.css";
import CategoriesContainer from "./categories/CategoriesContainer";
import ProductsContainer from "./products/ProductsContainer";
import { Preloader } from "../common/preloader/Preloader";

const Menu = React.memo(({ getCategories, getProducts, ...props }) => {
    useEffect(() => {
        getProducts();
        getCategories();
    }, [getCategories, getProducts]);
    return (
        <div className={styles.content}>
            {props.isFetching ? <Preloader /> : null}
            <CategoriesContainer />
            <div className={styles.menu_content}>
                <ProductsContainer />
            </div>
        </div>
    );
});

export default Menu;
