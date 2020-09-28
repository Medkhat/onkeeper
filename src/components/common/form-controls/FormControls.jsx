import React from 'react'
import { Field } from 'redux-form'
import './../../Login/Login.module.css'

export const FormElement = FormElement => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    const controlStyles = hasError ? {border: `2px solid red`} : {}
    return <>
        <FormElement {...input} {...props} style={controlStyles}/>
        { hasError && <span style={{color: 'red'}}> { meta.error } </span> }
    </>
}

export const createField = (type, placeholder, name, component, validators, label) => (
    <>
        <Field 
            type={type} 
            component={component} 
            validate={validators} 
            name={name}
            placeholder={placeholder}
            className="form-control"
        /> {label}
    </>
)