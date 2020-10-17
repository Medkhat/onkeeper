import React, { useState, useEffect } from "react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reduxForm } from "redux-form";
import { required } from "../../../utils/validators";
import {
    CustomField,
    FormControl,
} from "../../common/form-controls/FormControls";
import { Button, FormGroup, FormInput } from "../../Login/StyledComponents";
import styles from "../Menu.module.css";

const FormElement = FormControl(FormInput);

const AddCategoryForm = reduxForm({ form: "addCategoryForm" })(
    ({ handleSubmit, setImgUrl }) => {
        const [img, setImg] = useState(null);

        useEffect(() => {
            let reader = new FileReader();
            reader.onloadend = function () {
                setImgUrl(reader.result);
            };
            if (img && img.type.match("image.*")) reader.readAsDataURL(img);
        }, [img, setImgUrl]);

        const onCategoryImgInputChange = (event) => {
            setImg(event.target.files[0]);
        };

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <FormGroup>
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
                </FormGroup>
                <FormGroup>
                    {CustomField(
                        "text",
                        "Название категории",
                        "categoryName",
                        FormElement,
                        [required],
                        ""
                    )}
                </FormGroup>
                <FormGroup>
                    <Button>Добавить</Button>
                </FormGroup>
            </form>
        );
    }
);

export default AddCategoryForm;
