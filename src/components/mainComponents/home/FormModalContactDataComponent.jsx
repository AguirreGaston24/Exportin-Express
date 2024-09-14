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
    setError,
  } = useForm();

  const navigate = useNavigate();

  const onSubmitContactData = async (contactData) => {
    try {
      const response = await insertContactDataRequest(contactData);
  
      if (response.data.success) {
        navigate("/free-training-session");
      }
      
    } catch (error) {
      if (error.response) {
        // Error recibido desde el servidor
        const { data } = error.response;
  
        if (data && data.errors) {
          data.errors.forEach((error) => {
            setError(error.path, { type: "manual", message: error.msg });
          });
        } else {
          console.error("Error de respuesta inesperado:", data);
        }
      } else if (error.request) {
        // Error de red o solicitud
        console.error("Error de red o de solicitud:", error.message);
      } else {
        // Error inesperado
        console.error("Error inesperado:", error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitContactData)}>
      <div>
        <label htmlFor='name'>Nombre</label>
        <input id='name' {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor='phone'>Número con WhatsApp</label>
        <input id='phone' type='tel' {...register("phone")} />
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
