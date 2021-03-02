import React, { useState } from 'react';
import './index.css';
import withLoadingDelay from '../../hoc/WithLoadingDelay';
import Input from '../UI/Input';

const Auth = (props) => {
    const [authState, setAuthState] = useState({
        authForm: {
            username: {
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter email'
                },
                value: '',
                validation: {
                    required: true,
                    pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
                },
                valid: false,
                touched: false
            },
            password: {
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter min 8 symbols (min 1 digit and 1 letter)'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    pattern: /\d[A-Za-zА-Яа-яёЁ]|[A-Za-zА-Яа-яёЁ]\d/
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    });

    const formElementsArray = [];

    for (let key in authState.authForm) {
        formElementsArray.push({
            id: key,
            config: authState.authForm[key]
        });
    }

    function inputChangeHandler(event, inputId) {
        const updatedAuthForm = {...authState.authForm};
        const updatedFormElement = {...updatedAuthForm[inputId]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;

        updatedAuthForm[inputId] = updatedFormElement;

        let formIsValid = true;
        for (let inputId in updatedAuthForm) {
            formIsValid = updatedAuthForm[inputId].valid && formIsValid
        }
        setAuthState({authForm: updatedAuthForm, formIsValid: formIsValid});
    }

    function formHandler(event) {
        event.preventDefault();
        const formData = {};
        for (let formElemId in authState.authForm) {
            formData[formElemId] = authState.authForm[formElemId].value;
        }
        console.log(formData);
    }

    function checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.pattern) {
            isValid = rules.pattern.test(value) && isValid;
        }

        return isValid;
    }

    return (
        <form className="auth" onSubmit={formHandler}>
            <h3>Sign In</h3>
            {formElementsArray.map((elem) => (
                <Input
                    key={elem.id}
                    label={elem.id}
                    elementConfig={elem.config.elementConfig}
                    value={elem.config.value}
                    changed={(event) => inputChangeHandler(event, elem.id)}
                    invalid={!elem.config.valid}
                    touched={elem.config.touched}
                    pattern={elem.config.validation.pattern} />
            ))}
            <button type="submit" disabled={!authState.formIsValid}>Войти</button>
        </form>
    );
}

export default withLoadingDelay(Auth);
