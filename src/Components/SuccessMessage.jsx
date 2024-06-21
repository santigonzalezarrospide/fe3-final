import React from 'react'
import SuccessStyle from "../Styles/Success.module.css"

const SuccessMessage = ({ contacto }) => {
    const { nombre, email } = contacto;

    return (
        <div  className={SuccessStyle.successMessage}>
            <h4>Gracias {nombre}, te contactaremos cuando antes vía mail</h4>
        </div>
    )
}

export default SuccessMessage