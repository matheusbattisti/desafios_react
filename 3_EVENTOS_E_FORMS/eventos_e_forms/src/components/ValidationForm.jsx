import React, { useState } from "react";

function ValidationForm() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    validate(name, value);

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const validate = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        errorMessage = value ? "" : "O nome não pode estar em branco";
        break;
      case "email":
        errorMessage = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? ""
          : "Email inválido";
        break;
      case "password":
        errorMessage =
          value.length >= 6 ? "" : "A senha deve ter pelo menos 6 caracteres";
        break;
      default:
        break;
    }

    return errorMessage;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate on submit
    let validationErrors = {};
    Object.keys(values).forEach((key) => {
      const errorMessage = validate(key, values[key]);
      validationErrors = { ...validationErrors, [key]: errorMessage };
    });

    setErrors(validationErrors);

    if (!Object.values(validationErrors).some((x) => x !== "")) {
      console.log(values);
    } else {
      console.log("Formulário inválido!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Nome:</p>
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <p>Email:</p>
        <input
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <p>Senha:</p>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;
