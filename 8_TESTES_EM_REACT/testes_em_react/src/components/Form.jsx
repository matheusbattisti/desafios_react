import React, { useState } from "react";

function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="input-field"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
