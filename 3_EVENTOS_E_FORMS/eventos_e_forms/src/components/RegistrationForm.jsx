import React, { useState } from "react";

function RegistrationForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
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
      </div>
      <div>
        <p>E-mail:</p>
        <input
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Senha:</p>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
