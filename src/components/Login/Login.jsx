import React from 'react'
import { reduxForm } from 'redux-form'
import { required } from '../../utils/validators'
import { createField, FormElement } from '../common/form-controls/FormControls'
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
                {createField("text", "Username", "username", FormElement(FormInput), [required], "")}
            </FormGroup>
            <FormGroup>
                <FormInput type="password" placeholder="Password" name="password" />
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

const Login = () => {
    const onLoginSubmit = (formData) => {
        console.log(formData);
    }
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

export default Login