import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { insertContactDataRequest } from "../../../../config/contactDataRequests";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./FormModalContactDataComponent.css";
import { AiOutlineClose } from "react-icons/ai";

const FormModalContactDataComponent = ({ closeModal, onFormSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState({
    value: "AR",
    code: "+54",
    label: "Argentina",
  });
  const [phoneNumber, setPhoneNumber] = useState("");

  const countryOptions = [
    { value: "AR", label: "Argentina", code: "+54" },
    { value: "BO", label: "Bolivia", code: "+591" },
    { value: "BR", label: "Brasil", code: "+55" },
    { value: "CL", label: "Chile", code: "+56" },
    { value: "CO", label: "Colombia", code: "+57" },
    { value: "CR", label: "Costa Rica", code: "+506" },
    { value: "CU", label: "Cuba", code: "+53" },
    { value: "DO", label: "República Dominicana", code: "+1-809" },
    { value: "EC", label: "Ecuador", code: "+593" },
    { value: "SV", label: "El Salvador", code: "+503" },
    { value: "GT", label: "Guatemala", code: "+502" },
    { value: "HN", label: "Honduras", code: "+504" },
    { value: "MX", label: "México", code: "+52" },
    { value: "NI", label: "Nicaragua", code: "+505" },
    { value: "PA", label: "Panamá", code: "+507" },
    { value: "PY", label: "Paraguay", code: "+595" },
    { value: "PE", label: "Perú", code: "+51" },
    { value: "PR", label: "Puerto Rico", code: "+1787" },
    { value: "UY", label: "Uruguay", code: "+598" },
    { value: "VE", label: "Venezuela", code: "+58" },
  ];

  const onSubmitContactData = async (contactData) => {
    try {
      if (!contactData.countryCode) {
        contactData.countryCode = selectedCountry.code;
      }
      if (!contactData.country) {
        contactData.country = selectedCountry.label;
      }

      // Guardar los datos en localStorage
      localStorage.setItem("contactData", JSON.stringify(contactData));

      const response = await insertContactDataRequest(contactData);

      if (response.data.success) {
        alert("Datos cargados con éxito.");
        onFormSuccess(); // Llama a la función que maneja el éxito del formulario
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("contactData"));
    if (savedData) {
      setValue("name", savedData.name);
      setValue("email", savedData.email);
      setValue("phone", savedData.phone);
      setSelectedCountry({
        value: savedData.countryCode || "AR",
        label: savedData.country || "Argentina",
        code: savedData.countryCode || "+54",
      });
      setPhoneNumber(savedData.phone || "");
    }

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "auto";
    };
  }, [setValue]);

  return (
    <div
      className="HomePage-FormModalContactDataComponent-overlay"
      onClick={() => closeModal()}
    >
      <form
        onSubmit={handleSubmit(onSubmitContactData)}
        className="HomePage-FormModalContactDataComponent-form"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="HomePage-FormModalContactDataComponent-close"
          onClick={() => {
            closeModal();
          }}
        >
          <AiOutlineClose />
        </span>
        <h2 className="HomePage-FormModalContactDataComponent-title">
          Por favor déjanos tus datos para darte el acceso al entrenamiento de INMEDIATO
        </h2>

        <div className="HomePage-FormModalContactDataComponent-field">
          <input
            id="name"
            placeholder="Nombre"
            {...register("name", { required: "Este campo es obligatorio" })}
            className="HomePage-FormModalContactDataComponent-input"
          />
          {errors.name && (
            <p className="HomePage-FormModalContactDataComponent-error">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="HomePage-FormModalContactDataComponent-field">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email", { required: "Este campo es obligatorio" })}
            className="HomePage-FormModalContactDataComponent-input"
          />
          {errors.email && (
            <p className="HomePage-FormModalContactDataComponent-error">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="HomePage-FormModalContactDataComponent-field">
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <div style={{ position: "absolute", left: "15px", zIndex: 1 }}>
              <Select
                options={countryOptions.map((country) => ({
                  ...country,
                  label: (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={`/images/country-flags/${country.value.toLowerCase()}.png`}
                        alt={country.label}
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          marginRight: "10px",
                        }}
                      />
                    </div>
                  ),
                }))}
                onChange={(option) => {
                  setSelectedCountry(option);
                  setValue("countryCode", option.code);
                  setValue("country", option.label);
                }}
                value={{
                  value: selectedCountry.value,
                  label: (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={`/images/country-flags/${selectedCountry.value.toLowerCase()}.png`}
                        alt={selectedCountry.label}
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          marginRight: "10px",
                        }}
                      />
                    </div>
                  ),
                }}
                className="HomePage-FormModalContactDataComponent-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    minWidth: "3em",
                    border: "none",
                    boxShadow: "none",
                    cursor: "pointer",
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                  }),
                  indicatorSeparator: () => ({ display: "none" }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 1000,
                    border: "1px solid var(--medium-gray)",
                    marginTop: "5px",
                  }),
                  menuList: (base) => ({
                    ...base,
                    maxHeight: "200px",
                    overflowY: "auto",
                  }),
                }}
                placeholder={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/images/country-flags/ar.png"
                      alt="Argentina"
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                    Argentina
                  </div>
                }
              />
            </div>

            {selectedCountry?.code && (
              <span className="HomePage-FormModalContactDataComponent-span">
                {selectedCountry.code}
              </span>
            )}
            <input
              id="phone"
              type="tel"
              placeholder="Número con WhatsApp"
              {...register("phone", { required: "Este campo es obligatorio" })}
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setPhoneNumber(value);
                  setValue("phone", value);
                }
              }}
              style={{
                paddingLeft: "8rem",
              }}
              className="HomePage-FormModalContactDataComponent-input"
            />
          </div>
          {errors.phone && (
            <p className="HomePage-FormModalContactDataComponent-error">
              {errors.phone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="HomePage-FormModalContactDataComponent-button"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormModalContactDataComponent;
