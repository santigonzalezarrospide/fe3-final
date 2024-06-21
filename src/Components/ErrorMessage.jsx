import React from 'react'
import ErrorStyle from "../Styles/Error.module.css"

const ErrorMessage = () => {
    return (
        <div className={ErrorStyle.errorMessage}>
            <h4>
                Por favor verifique su información nuevamente
            </h4>
        </div>
    )
}

export default ErrorMessage