import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
    if (!props.show) {
        return null;
    }

    const onCloseModalBtnClick = () => {
        props.setModalState(false);
    };

    return (
        <div className={styles.outer}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <span className={styles.title}>{props.title}</span>
                    <span
                        className={styles.iconAsBtn}
                        onClick={onCloseModalBtnClick}
                    >
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
                </div>
                <div className={styles.body}>
                    <props.component
                        setImgUrl={props.setImgUrl}
                        onSubmit={props.onAddCategoryFormSubmit}
                        initialValues={{ name: props.name }}
                        addCategoryIsFetching={props.addCategoryIsFetching}
                        setModalState={props.setModalState}
                        imgUrl={props.imgUrl}
                        name={props.name}
                        enableForEdit={props.enableForEdit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
