import React, { useState } from "react";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";
import FormStyle from "../Styles/Form.module.css"

const Form = () => {
  const [contacto, setContacto] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (contacto.nombre.length > 5 && !/^\s/.test(contacto.nombre) && regex.test(contacto.email)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo: </label>
        <input  className={FormStyle.input} type="text" value={contacto.nombre}
          onChange={(event) => setContacto({
            ...contacto, nombre: event.target.value
          })} />

        <label>Email: </label>
        <input className={FormStyle.input} type="email" value={contacto.email}
          onChange={(event) => setContacto({
            ...contacto, email: event.target.value
          })}
        />

        <Button className={FormStyle.btn}>Registrarse</Button>
      </form>

      {show ? <SuccessMessage contacto={contacto} /> : null}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Form;
