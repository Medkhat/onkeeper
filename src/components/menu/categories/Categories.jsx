import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Modal from "../../common/modal/Modal";
import styles from "../Menu.module.css";
import AddCategoryForm from "./AddCategoryForm";
import CategoryItem from "./CategoryItem";

const Categories = (props) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [enableForEdit, setEnableForEdit] = useState(null);
    const editCategoryItem = (categoryId) => {
        props.categories.forEach((item) => {
            if (item.id === categoryId) {
                setEnableForEdit({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    restoran: item.restoran,
                });
                setImgUrl(item.image);
            }
        });
    };

    const onAddCategoryBtnClick = () => {
        setEnableForEdit(null);
        setImgUrl(null);
        props.setCategoryModalState(true);
    };

    const onSubmit = (formData) => {
        if (enableForEdit)
            props.editCategory(
                enableForEdit.id,
                formData.name,
                formData.categoryImg,
                enableForEdit.restoran
            );
        else props.addCategory(formData.name, imgUrl, 1);
    };

    let categoryItems = props.categories.map((item) => {
        return (
            <CategoryItem
                name={item.name}
                key={item.id}
                categoryId={item.id}
                deleteCategory={props.deleteCategory}
                editCategoryItem={editCategoryItem}
                setModalState={props.setCategoryModalState}
                getOneCategoryProducts={props.getOneCategoryProducts}
            />
        );
    });

    return (
        <>
            <div className={styles.categories}>
                <h3 className={styles.title}>
                    <span>Категории</span>
                    <span
                        className={styles.iconAsBtn}
                        onClick={onAddCategoryBtnClick}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span>
                </h3>
                <div className={styles.category_items}>
                    <div className={styles.item_block} id={props.categoryId}>
                        <p
                            className={styles.item}
                            onClick={() => props.getProducts()}
                        >
                            All category
                        </p>
                    </div>
                    {props.isFetching ? (
                        <Skeleton count={6} height={30} />
                    ) : (
                        categoryItems
                    )}
                </div>
            </div>
            <Modal
                show={props.modalState}
                title={
                    enableForEdit ? "Изменить категорию" : "Добавить категорию"
                }
                initialValues={{
                    name: enableForEdit ? enableForEdit.name : null,
                }}
                imgUrl={
                    enableForEdit && enableForEdit.image
                        ? enableForEdit.image
                        : imgUrl
                }
                enableForEdit={enableForEdit ? enableForEdit : null}
                setModalState={props.setCategoryModalState}
                onSubmit={onSubmit}
                component={AddCategoryForm}
                setImgUrl={setImgUrl}
                IsFetching={props.loaderOnModalBtn}
            />
        </>
    );
};

export default Categories;
