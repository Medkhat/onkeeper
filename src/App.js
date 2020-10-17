import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { Preloader } from "./components/common/preloader/Preloader";
import { withSuspense } from "./components/hoc/withSuspense";
import Modal from "./components/common/modal/Modal";
import { setModalState } from "./redux/menu-reducer";
import AddCategoryForm from "./components/menu/categories/AddCategoryForm";

const MenuContainer = React.lazy(() =>
    import("./components/menu/MenuContainer")
);
const Orders = React.lazy(() => import("./components/orders/Orders"));
const PersonalContainer = React.lazy(() =>
    import("./components/personal/PersonalContainer")
);

const Main = (props) => {
    const [imgUrl, setImgUrl] = useState();

    const onAddCategoryFormSubmit = (formData) => {
        console.log(formData);
        console.log(imgUrl);
    };

    return (
        <>
            <Header />
            <div className="app_wrapper">
                <Switch>
                    <Redirect exact from="/" to="/products" />
                    <Route path="/products">
                        {withSuspense(MenuContainer)}
                    </Route>
                    <Route path="/orders">{withSuspense(Orders)}</Route>
                    <Route path="/personal">
                        {withSuspense(PersonalContainer)}
                    </Route>
                </Switch>
            </div>

            <Modal
                show={props.modalState}
                title="Добавить категорию"
                setModalState={props.setModalState}
                modalType="form"
                onAddCategoryFormSubmit={onAddCategoryFormSubmit}
                component={AddCategoryForm}
                setImgUrl={setImgUrl}
            />
        </>
    );
};

function App({ initializeApp, initialized, modalState, setModalState }) {
    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    if (!initialized) return <Preloader />;
    return (
        <>
            <Switch>
                <Route path="/login" render={() => <Login />} />
                <Route
                    path="/"
                    render={() => (
                        <Main
                            modalState={modalState}
                            setModalState={setModalState}
                        />
                    )}
                />
            </Switch>
        </>
    );
}

let mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized,
    modalState: state.menuReducer.modalState,
});
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp, setModalState })
)(App);

export default AppContainer;
