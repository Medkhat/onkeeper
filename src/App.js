import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { Preloader } from "./components/common/preloader/Preloader";
import { withSuspense } from "./components/hoc/withSuspense";

const MenuContainer = React.lazy(() =>
    import("./components/menu/MenuContainer")
);
const Orders = React.lazy(() => import("./components/orders/Orders"));
const PersonalContainer = React.lazy(() =>
    import("./components/personal/PersonalContainer")
);

const Main = () => {
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
        </>
    );
};

function App({ initializeApp, initialized }) {
    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    if (!initialized) return <Preloader />;
    return (
        <>
            <Switch>
                <Route path="/login" render={() => <Login />} />
                <Route path="/" render={() => <Main />} />
            </Switch>
        </>
    );
}

let mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized,
});
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);

export default AppContainer;
