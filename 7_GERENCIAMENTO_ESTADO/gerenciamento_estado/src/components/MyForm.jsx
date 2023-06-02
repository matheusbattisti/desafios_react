import React from "react";
import { Form, Field } from "react-final-form";

const required = (value) => (value ? undefined : "Campo obrigatório");
const mustBeNumber = (value) =>
  isNaN(value) ? "Deve ser um número" : undefined;
const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Deve ser maior que ${min}`;

const MyForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome</label>
            <Field name="firstName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Nome" />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Sobrenome</label>
            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Sobrenome" />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Email</label>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="email" placeholder="Email" />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Idade</label>
            <Field
              name="age"
              validate={composeValidators(required, mustBeNumber, minValue(18))}
            >
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Idade" />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
          </div>
          {values.age && values.age < 18 && (
            <div>
              <label>Nome do Responsável</label>
              <Field name="parentName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Nome do Responsável"
                    />
                    {meta.error && meta.touched && <p>{meta.error}</p>}
                  </div>
                )}
              </Field>
            </div>
          )}
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Enviar
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Resetar
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default MyForm;

function composeValidators(...validators) {
  return (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
}
