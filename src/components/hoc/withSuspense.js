import React from "react";
import { AppPreloader } from "../common/preloader/Preloader";

export const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<AppPreloader />}>
                <Component {...props} />
            </React.Suspense>
        );
    };
};
