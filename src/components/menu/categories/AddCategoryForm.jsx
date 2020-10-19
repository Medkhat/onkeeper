import React, { useEffect, useState } from "react";
import { faImage, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
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

const CategoryImg = (props) => {
    return (
        <div className={styles.img}>
            <img src={props.imgUrl} alt="CATEGORY_IMG" />
            <div className={styles.img_name}>
                <span>{props.name}</span>
                <span
                    onClick={() => {
                        props.setImg(null);
                        props.setImgUrl(null);
                    }}
                    style={{ cursor: "pointer" }}
                >
                    <FontAwesomeIcon icon={faTimesCircle} />
                </span>
            </div>
        </div>
    );
};

const AddCategoryForm = reduxForm({ form: "addCategoryForm" })(
    ({ handleSubmit, imgUrl, setImgUrl, isFetching }) => {
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
                    {imgUrl && img ? (
                        <CategoryImg
                            imgUrl={imgUrl}
                            name={img.name}
                            setImg={setImg}
                            setImgUrl={setImgUrl}
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
                        "categoryName",
                        FormElement,
                        [required],
                        ""
                    )}
                </FormGroup>
                <FormGroup>
                    <Button>
                        {isFetching ? <LoaderToButton /> : "Добавить"}
                    </Button>
                </FormGroup>
            </form>
        );
    }
);

export default AddCategoryForm;
