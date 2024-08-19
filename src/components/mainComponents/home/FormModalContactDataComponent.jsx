import React from "react";
import { useForm } from "react-hook-form";
import { insertContactDataRequest } from "../../../api/contactDataRequests";
import { useNavigate } from "react-router-dom";
import { PrimaryButtonComponent } from "../../secondaryComponents/PrimaryButtonComponent";

const FormModalContactDataComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmitContactData = async (contactData) => {
    await insertContactDataRequest(contactData);
    navigate("/free-training-session");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitContactData)}>
      <div>
        <label htmlFor='name'>Nombre</label>
        <input
          id='name'
          {...register("name", { required: "El nombre es obligatorio" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Dirección de email inválida",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor='phone'>Número con WhatsApp</label>
        <input
          id='phone'
          type='tel'
          {...register("phone", {
            required: "El número de teléfono es obligatorio",
            pattern: {
              value: /^[0-9]{10,14}$/,
              message: "Número de teléfono inválido",
            },
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <PrimaryButtonComponent
        width='200px'
        height='200px'
        fontSize='20px'
        backgroundColor='red'
        type='submit'
        textButton='Hola'
      />
    </form>
  );
};

export default FormModalContactDataComponent;
