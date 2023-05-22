import React, { useState } from "react";

function DynamicForm() {
  const [fields, setFields] = useState([""]);

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i] = event.target.value;
    setFields(values);
  };

  const handleAdd = () => {
    const values = [...fields];
    values.push("");
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, i) => (
          <div key={i}>
            <input
              key={i}
              value={field}
              onChange={(event) => handleChange(i, event)}
            />
          </div>
        ))}
        <input type="submit" value="Enviar" />
      </form>
      <button onClick={handleAdd}>Novo campo</button>
    </div>
  );
}

export default DynamicForm;
