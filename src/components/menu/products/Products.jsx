import React, { useState } from "react";
import styles from "../Menu.module.css";
import ProductItem from "./ProductItem";
import plusIcon from "./../../../img/plus.png";
import Modal from "../../common/modal/Modal";
import AddProduct from "./AddProduct";

const Products = (props) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [enableForEdit, setEnableForEdit] = useState(null);
    let [initialValues, setInitialValues] = useState({});
    const editProductItem = (productId) => {
        props.products.forEach((item) => {
            if (item.id === productId) {
                setEnableForEdit({
                    id: item.id,
                    name: item.name,
                    body: item.body,
                    status: item.status,
                    unit: item.unit,
                    price: item.price,
                    image: item.image,
                    category: item.category,
                });
                setInitialValues({
                    name: item.name,
                    body: item.body,
                    status: item.status,
                    unit: item.unit,
                    price: item.price,
                });
                setImgUrl(item.image);
            }
        });
    };

    const onAddProductsBtnClick = () => {
        setEnableForEdit(null);
        setImgUrl(null);
        setInitialValues({});
        props.setProductModalState(true);
    };

    const onSubmit = (formData) => {
        if (enableForEdit) {
            props.editProduct(
                enableForEdit.id,
                formData.name,
                formData.body,
                formData.status,
                formData.unit,
                formData.price,
                imgUrl,
                5
            );
        } else {
            props.addProduct(
                formData.name,
                formData.body,
                formData.status,
                formData.unit,
                formData.price,
                imgUrl,
                5
            );
        }
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
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            editProductItem={editProductItem}
                            setProductModalState={props.setProductModalState}
                            deleteProduct={props.deleteProduct}
                        />
                    );
                })}
            </div>
            <Modal
                show={props.modalState}
                title={enableForEdit ? "Изменить блюдо" : "Добавить блюдо"}
                setModalState={props.setProductModalState}
                component={AddProduct}
                imgUrl={
                    enableForEdit && enableForEdit.image
                        ? enableForEdit.image
                        : imgUrl
                }
                setImgUrl={setImgUrl}
                onSubmit={onSubmit}
                enableForEdit={enableForEdit}
                initialValues={initialValues}
                IsFetching={props.IsFetching}
            />
        </>
    );
};

export default Products;
