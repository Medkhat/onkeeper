import React, { useEffect, useState } from "react";
import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reduxForm } from "redux-form";
import { required } from "../../../utils/validators";
import {
    CustomField,
    FormControl,
} from "../../common/form-controls/FormControls";
import { Button, FormGroup, FormInput } from "../../Login/StyledComponents";
import styles from "../Menu.module.css";
import { LoaderToButton } from "../../common/preloader/Preloader";

const FormElement = FormControl(FormInput);

const ImgOverlay = ({ setImg, onRemoveImgBtnClick }) => {
    const onCategoryImgInputChange = (event) => {
        setImg(event.target.files[0]);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.centered}>
                <span
                    className={styles.remove_img}
                    onClick={onRemoveImgBtnClick}
                >
                    <span style={{ marginRight: "10px" }}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <span>Удалить изображение</span>
                </span>
                <label className={styles.img_input_label}>
                    <input
                        type="file"
                        name="categoryImg"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={onCategoryImgInputChange}
                    />{" "}
                    <FontAwesomeIcon
                        icon={faImage}
                        style={{ marginRight: 10 }}
                    />
                    Загрузить новое
                </label>
            </div>
        </div>
    );
};

const CategoryImg = (props) => {
    return (
        <div className={styles.img}>
            <img src={props.imgUrl} alt="CATEGORY_IMG" />
            <ImgOverlay
                setImgUrl={props.setImgUrl}
                setImg={props.setImg}
                onRemoveImgBtnClick={props.onRemoveImgBtnClick}
            />
        </div>
    );
};

const AddCategoryForm = reduxForm({ form: "addCategoryForm" })(
    ({
        handleSubmit,
        imgUrl,
        setImgUrl,
        addCategoryIsFetching,
        enableForEdit,
    }) => {
        const [img, setImg] = useState(null);

        useEffect(() => {
            let reader = new FileReader();
            reader.onloadend = function () {
                setImgUrl(reader.result);
            };
            if (img) reader.readAsDataURL(img);
        }, [img, setImgUrl]);

        const onCategoryImgInputChange = (event) => {
            setImg(event.target.files[0]);
        };

        const onRemoveImgBtnClick = () => {
            if (enableForEdit) enableForEdit.image = null;
            setImg(null);
            setImgUrl(null);
        };

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <FormGroup>
                    {imgUrl !== null ? (
                        <CategoryImg
                            imgUrl={imgUrl}
                            setImg={setImg}
                            setImgUrl={setImgUrl}
                            onRemoveImgBtnClick={onRemoveImgBtnClick}
                        />
                    ) : (
                        <label className={styles.img_input_label}>
                            <input
                                type="file"
                                name="categoryImg"
                                style={{ display: "none" }}
                                accept="image/*"
                                onChange={onCategoryImgInputChange}
                            />{" "}
                            <FontAwesomeIcon
                                icon={faImage}
                                style={{ marginRight: 10 }}
                            />
                            Загрузить изображение
                        </label>
                    )}
                </FormGroup>
                <FormGroup>
                    {CustomField(
                        "text",
                        "Название категории",
                        "name",
                        FormElement,
                        [required],
                        ""
                    )}
                </FormGroup>
                <FormGroup>
                    <Button style={{ display: "block" }}>
                        {addCategoryIsFetching ? (
                            <LoaderToButton />
                        ) : enableForEdit ? (
                            "Сохранить"
                        ) : (
                            "Добавить"
                        )}
                    </Button>
                </FormGroup>
            </form>
        );
    }
);

export default AddCategoryForm;
