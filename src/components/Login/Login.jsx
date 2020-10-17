import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators";
import { CustomField, FormControl } from "../common/form-controls/FormControls";

import {
    Button,
    Container,
    ContainerWrapper,
    FormGroup,
    FormInput,
    LoginWrapper,
    Logo,
} from "./StyledComponents";
import { LoaderToButton } from "../common/preloader/Preloader";

const FormElement = FormControl(FormInput);
const LoginForm = reduxForm({ form: "login" })(
    ({ handleSubmit, error, isFetching }) => {
        return (
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    {CustomField(
                        "text",
                        "Username",
                        "username",
                        FormElement,
                        [required],
                        ""
                    )}
                </FormGroup>
                <FormGroup>
                    {CustomField(
                        "password",
                        "Password",
                        "password",
                        FormElement,
                        [required],
                        ""
                    )}
                </FormGroup>
                <div style={{ color: "red" }}>{error}</div>
                <FormGroup thirdGroup>
                    <label>
                        {CustomField(
                            "checkbox",
                            "",
                            "rememberMe",
                            FormElement,
                            [],
                            "Remember me"
                        )}
                    </label>
                    <Link
                        to={() => false}
                        style={{
                            textDecoration: "none",
                            color: "rgb(255, 0, 72)",
                        }}
                    >
                        Forgot password ?
                    </Link>
                </FormGroup>
                <FormGroup>
                    <Button
                        style={
                            isFetching
                                ? { padding: "5px 0" }
                                : { padding: "10px 20px" }
                        }
                    >
                        {isFetching ? <LoaderToButton /> : "Sign in"}
                    </Button>
                </FormGroup>
            </form>
        );
    }
);

const Login = (props) => {
    const onLoginSubmit = (formData) => {
        props.login(formData.username, formData.password);
    };
    if (props.isAuth) return <Redirect to={"/products"} />;

    return (
        <LoginWrapper>
            <ContainerWrapper>
                <Container>
                    <Logo>OnKeeper</Logo>
                    <LoginForm
                        onSubmit={onLoginSubmit}
                        isFetching={props.isFetching}
                    />
                </Container>
            </ContainerWrapper>
        </LoginWrapper>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    isFetching: state.authReducer.isFetching,
});

export default connect(mapStateToProps, { login })(Login);
