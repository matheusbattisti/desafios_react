import React, { useState } from "react";

function MultiPartForm() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.senha === "") {
      alert("Por favor, preencha o campo senha antes de prosseguir.");
    } else {
      console.log(formValues);
    }
  };

  const nextStep = () => {
    if (step === 1 && formValues.nome === "") {
      alert("Por favor, preencha o campo nome antes de prosseguir.");
    } else if (step === 2 && formValues.email === "") {
      alert("Por favor, preencha o campo email antes de prosseguir.");
    } else {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label>
            <p>Nome:</p>
            <input
              name="nome"
              value={formValues.nome}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      {step === 2 && (
        <div>
          <label>
            <p>Email:</p>
            <input
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      {step === 3 && (
        <div>
          <label>
            <p>Senha:</p>
            <input
              name="senha"
              type="password"
              value={formValues.senha}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      {step > 1 && (
        <button type="button" onClick={previousStep}>
          Anterior
        </button>
      )}
      {step < 3 && (
        <button type="button" onClick={nextStep}>
          Próximo
        </button>
      )}
      {step === 3 && <button type="submit">Enviar</button>}
    </form>
  );
}

export default MultiPartForm;
