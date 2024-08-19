import React from "react";
import { useForm } from "react-hook-form";
import { insertContactDataRequest } from "../../../api/contactDataRequests";
import { Navigate, useNavigate } from "react-router-dom";

const FormModalContactDataComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitContactData = async (contactData) => {
    const response = await insertContactDataRequest(contactData);
    if (response.data.success) {
      Navigate("/free-training-session");
      console.log(response.data.message);
    } else {
      console.log(response.data.message, response?.data?.error);
    }
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

      <button type='submit'>Enviar</button>
    </form>
  );
};

export default FormModalContactDataComponent;
