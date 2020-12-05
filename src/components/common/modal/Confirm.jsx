import React from "react";
import { LoaderToButton } from "../preloader/Preloader";
import { Button } from "../StyledComponents";
import styles from "./Modal.module.css";

export const Confirmation = (props) => {
    const onSubmitConfirmation = () => props.delete(props.enableForDelete.id);
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
                    {props.IsFetching ? <LoaderToButton /> : "Удалить"}
                </Button>
            </div>
        </div>
    );
};
