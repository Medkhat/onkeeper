import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required } from '../../utils/validators'
import { createField, FormControl } from '../common/form-controls/FormControls'
import { 
    Button, 
    Container, 
    ContainerWrapper, 
    FormGroup, 
    FormInput,
    LoginWrapper, 
    Logo 
} from './StyledLogin'

const LoginForm = reduxForm({form: 'login'})(({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                {createField("text", "Username", "username", FormControl(FormInput), [required], "")}
            </FormGroup>
            <FormGroup>
                {createField("password", "Password", "password", FormControl(FormInput), [required], "")}
            </FormGroup>
            <div style={{color: 'red'}}>{error}</div>
            <FormGroup thirdGroup>
                <label>
                    <input type="checkbox" name="rememberMe"/> Remember me
                </label>
                <Button>Sign in</Button>
            </FormGroup>
        </form>
    )
})

const Login = (props) => {
    const onLoginSubmit = (formData) => {
        props.login(formData.username, formData.password)
    }
    if (props.isAuth)
        return <Redirect to={'/products'}/>

    return (
        <LoginWrapper>
            <ContainerWrapper>
                <Container>
                    <Logo>OnKeeper</Logo>
                    <LoginForm onSubmit={onLoginSubmit} />
                </Container>
            </ContainerWrapper>
        </LoginWrapper>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {login})(Login)