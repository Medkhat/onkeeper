import React from "react";
import styles from "../Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ProductItem = (props) => {
    const clickHandler = () => {
        props.editProductItem(props.id);
        props.setProductModalState(true);
    };

    return (
        <div className={styles.item_card}>
            <img src={props.image} alt="PRODUCT_IMG" />
            <p className={styles.product_name} onClick={clickHandler}>
                {props.name}
            </p>
            <span
                className={styles.times}
                onClick={() => {
                    props.deleteProduct(props.id);
                }}
            >
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{ backgroundColor: "#fff", borderRadius: "50%" }}
                />
            </span>
        </div>
    );
};

export default ProductItem;
