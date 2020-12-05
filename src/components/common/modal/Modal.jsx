import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Modal.module.css";

const Modal = ({
    show,
    setModalState,
    title,
    component,
    initialValues,
    ...props
}) => {
    if (!show) {
        return null;
    }
    const Component = component;
    const onCloseModalBtnClick = () => {
        setModalState(false);
    };

    return (
        <div className={styles.outer}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <span className={styles.title}>{title}</span>
                    <span
                        className={styles.iconAsBtn}
                        onClick={onCloseModalBtnClick}
                    >
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
                </div>
                <div className={styles.body}>
                    <Component initialValues={initialValues} {...props} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
