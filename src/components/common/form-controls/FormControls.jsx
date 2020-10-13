import React from 'react'
import { Field } from 'redux-form'
import './../../Login/Login.module.css'

export const FormControl = (FormElement) => {
    return ({input, meta, ...props}) => {
        const hasError = meta.touched && meta.error
        const controlStyles = hasError ? {border: `2px solid red`} : {}
        return <>
            <FormElement {...input} {...props} style={controlStyles}/>
            { hasError && <span style={{color: 'red', fontSize: '12px', margin: '5px 0'}}> { meta.error } </span> }
        </>
    }
}

export const CustomField = (type, placeholder, name, component, validators, label) => (
    <>
        <Field 
            type={type}
            component={component} 
            validate={validators} 
            name={name}
            placeholder={placeholder}
        /> {label}
    </>
)