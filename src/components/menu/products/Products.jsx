import React, { useState } from "react";
import styles from "../Menu.module.css";
import ProductItem from "./ProductItem";
import plusIcon from "./../../../img/plus.png";
import Modal from "../../common/modal/Modal";
import AddProduct from "./add-product/AddProduct";

const Products = (props) => {
    const [imgUrl, setImgUrl] = useState(null);

    const onAddProductsBtnClick = () => {
        props.setProductModalState(true);
    };

    return (
        <>
            <div className={styles.products}>
                <div
                    className={`${styles.item_card} ${styles.add_product}`}
                    onClick={onAddProductsBtnClick}
                >
                    <img
                        src={plusIcon}
                        className={styles.plus}
                        alt="ADD_PRODUCT"
                    />
                </div>
                {props.products.map((item) => {
                    return (
                        <ProductItem
                            key={item.id}
                            name={item.name}
                            href={item.category}
                            image={item.image}
                        />
                    );
                })}
            </div>
            <Modal
                show={props.modalState}
                title={"Добавить блюдо"}
                setModalState={props.setProductModalState}
                component={AddProduct}
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
            />
        </>
    );
};

export default Products;
