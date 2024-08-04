import React from 'react';
import { useForm } from 'react-hook-form';
import { insertContactDataRequest } from '../../api/contactDataRequests';

const FormContactData = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (dataContact) => {
    try {
      await insertContactDataRequest(dataContact);
    } catch (error) {
      console.log('Ocurrió un error durante el envío.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>Nombre</label>
        <input
          id='name'
          {...register('name', { required: 'El nombre es obligatorio' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          {...register('email', { 
            required: 'El email es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Dirección de email inválida'
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor='phoneNumber'>Número con WhatsApp</label>
        <input
          id='phoneNumber'
          type='tel'
          {...register('phoneNumber', { 
            required: 'El número de teléfono es obligatorio',
            pattern: {
              value: /^[0-9]{10,14}$/,
              message: 'Número de teléfono inválido'
            }
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <button type='submit'>Enviar</button>
    </form>
  );
};

export default FormContactData;
