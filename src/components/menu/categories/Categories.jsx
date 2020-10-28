import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "../../common/modal/Modal";
import styles from "../Menu.module.css";
import AddCategoryForm from "./AddCategoryForm";
import CategoryItem from "./CategoryItem";

const Categories = React.memo((props) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [enableForEdit, setEnableForEdit] = useState(null);

    const editCategoryItem = (categoryId) => {
        props.categories.forEach((item) => {
            if (item.id === categoryId)
                setEnableForEdit({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    restoran: item.restoran,
                });
        });
    };

    const onAddCategoryBtnClick = () => {
        setEnableForEdit(null);
        setImgUrl(null);
        props.setModalState(true);
    };

    const onAddCategoryFormSubmit = (formData) => {
        props.addCategory(formData.categoryName, imgUrl, 1);
    };

    let categoryItems = props.categories.map((item) => {
        return (
            <CategoryItem
                name={item.name}
                key={item.id}
                categoryId={item.id}
                deleteCategory={props.deleteCategory}
                editCategoryItem={editCategoryItem}
                setModalState={props.setModalState}
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
                <div className={styles.category_items}>{categoryItems}</div>
            </div>
            <Modal
                show={props.modalState}
                title={
                    enableForEdit ? "Изменить категорию" : "Добавить категорию"
                }
                name={enableForEdit ? enableForEdit.name : null}
                imgUrl={
                    enableForEdit && enableForEdit.image
                        ? enableForEdit.image
                        : imgUrl
                }
                enableForEditImg={
                    enableForEdit && enableForEdit.image
                        ? enableForEdit.image
                        : null
                }
                setModalState={props.setModalState}
                modalType="form"
                onAddCategoryFormSubmit={onAddCategoryFormSubmit}
                component={AddCategoryForm}
                setImgUrl={setImgUrl}
                addCategoryIsFetching={props.addCategoryIsFetching}
            />
        </>
    );
});

export default Categories;
