import React from "react";
import styles_p from "./Preloader.module.css";
import styles_m from "../../menu/Menu.module.css";
import loader_red from "../../../img/loader-red.svg";
import loader from "../../../img/loader.svg";
import Skeleton from "react-loading-skeleton";

export const AppPreloader = () => {
    return (
        <div className={styles_p.preloader}>
            <img src={loader_red} className={styles_p.loader} alt="LOADER" />
        </div>
    );
};

export const SkeletonCard = () => {
    return (
        <div className={styles_m.products}>
            {Array(12)
                .fill()
                .map((item, index) => (
                    <div className={styles_p.card} key={index}>
                        <Skeleton height={120} />
                        <p className={styles_p.name}>
                            <Skeleton width={`60%`} />
                        </p>
                    </div>
                ))}
        </div>
    );
};

export const LoaderToButton = () => {
    return <img src={loader} alt="LOADER" className={styles_p.button_loader} />;
};
