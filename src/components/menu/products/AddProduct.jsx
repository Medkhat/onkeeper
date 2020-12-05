import React, { useEffect, useState } from "react";
import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reduxForm, Field } from "redux-form";
import { required } from "../../../utils/validators";
import {
    CustomField,
    FormControl,
} from "../../common/form-controls/FormControls";
import {
    Button,
    FormGroup,
    FormInput,
    FormTextarea,
    Select,
} from "../../common/StyledComponents";
import styles from "../Menu.module.css";
import { LoaderToButton } from "../../common/preloader/Preloader";

const FormElement = FormControl(FormInput);
const TextArea = FormControl(FormTextarea);
const FormSelect = FormControl(Select);

const ImgOverlay = ({ onRemoveImgBtnClick }) => {
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
                {/* <label className={styles.img_input_label}>
                    <input
                        type="file"
                        name="categoryImg"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={onProductImgInputChange}
                    />{" "}
                    <FontAwesomeIcon
                        icon={faImage}
                        style={{ marginRight: 10 }}
                    />
                    Загрузить новое
                </label> */}
            </div>
        </div>
    );
};

const ProductImg = (props) => {
    return (
        <div className={styles.img}>
            <img src={props.imgUrl} alt="PRODUCT_IMG" />
            <ImgOverlay
                setImg={props.setImg}
                onRemoveImgBtnClick={props.onRemoveImgBtnClick}
            />
        </div>
    );
};

const AddProductForm = reduxForm({ form: "addProductForm" })(
    ({ handleSubmit, imgUrl, setImgUrl, IsFetching, enableForEdit }) => {
        const [img, setImg] = useState(null);

        useEffect(() => {
            let reader = new FileReader();
            reader.onloadend = function () {
                setImgUrl(reader.result);
            };
            if (img) reader.readAsDataURL(img);
        }, [img, setImgUrl]);

        const onProductImgInputChange = (event) => {
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
                        <ProductImg
                            imgUrl={imgUrl}
                            setImg={setImg}
                            onRemoveImgBtnClick={onRemoveImgBtnClick}
                        />
                    ) : (
                        <label className={styles.img_input_label}>
                            <input
                                type="file"
                                name="productImg"
                                style={{ display: "none" }}
                                accept="image/*"
                                onChange={onProductImgInputChange}
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
                        "Название блюда",
                        "name",
                        FormElement,
                        [required],
                        ""
                    )}
                </FormGroup>
                <FormGroup>
                    <Field name="status" component={FormSelect}>
                        <option value="1">Порция</option>
                        <option value="2">Штук</option>
                        <option value="3">Литр</option>
                        <option value="4">Стакан</option>
                    </Field>
                </FormGroup>
                <FormGroup>
                    {CustomField(
                        "number",
                        "Единица измерения",
                        "unit",
                        FormElement,
                        [required],
                        ""
                    )}
                </FormGroup>
                <FormGroup>
                    {CustomField(
                        "number",
                        "Цена за единицу",
                        "price",
                        FormElement,
                        [required],
                        ""
                    )}
                </FormGroup>
                <FormGroup>
                    {CustomField(
                        "",
                        "Описание",
                        "body",
                        TextArea,
                        [required],
                        ""
                    )}
                </FormGroup>
                <FormGroup>
                    <Button style={{ display: "block" }}>
                        {IsFetching ? (
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

export default AddProductForm;
