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

const ImgOverlay = ({ setImg, setImgUrl, enableForEditImg }) => {
    const onRemoveImgBtnClick = () => {
        if (enableForEditImg) enableForEditImg = null;
        setImg(null);
        setImgUrl(null);
    };

    const onCategoryImgInputChange = (event) => {
        if (enableForEditImg) enableForEditImg = null;
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
                enableForEditImg={props.enableForEditImg}
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
        enableForEditImg,
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

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <FormGroup>
                    {imgUrl ? (
                        <CategoryImg
                            imgUrl={imgUrl}
                            setImg={setImg}
                            setImgUrl={setImgUrl}
                            enableForEditImg={enableForEditImg}
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
