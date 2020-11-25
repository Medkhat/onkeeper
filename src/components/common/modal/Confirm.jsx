import React from "react";
import { Button } from "../StyledComponents";
import styles from "./Modal.module.css";

export const Confirmation = (props) => {
    const onSubmitConfirmation = () =>
        props.deleteCategory(props.enableForDelete.id);
    return (
        <div className={styles.confirm}>
            <h2>
                {props.text} "{props.enableForDelete.name}" ?
            </h2>
            <div className={styles.confirm_btns}>
                <Button type={"button"} btnComponent="confirm">
                    Отмена
                </Button>
                <Button
                    type={"button"}
                    btnComponent="confirm"
                    onClick={onSubmitConfirmation}
                >
                    Удалить
                </Button>
            </div>
        </div>
    );
};
