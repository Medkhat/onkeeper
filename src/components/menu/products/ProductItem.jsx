import React from "react";
import styles from "../Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ProductItem = (props) => {
    const clickHandler = () => {
        props.editProductItem(props.id);
        props.setProductModalState(true);
    };

    const onDeleteProductClick = () => {
        props.setConfirmModalState(true);
        props.setEnableForDelete({
            id: props.id,
            name: props.name,
        });
    };

    return (
        <div className={styles.item_card}>
            <img src={props.image} alt="PRODUCT_IMG" />
            <p className={styles.product_name} onClick={clickHandler}>
                {props.name}
            </p>
            <span className={styles.times} onClick={onDeleteProductClick}>
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{ backgroundColor: "#fff", borderRadius: "50%" }}
                />
            </span>
        </div>
    );
};

export default ProductItem;
