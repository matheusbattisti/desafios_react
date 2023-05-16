import React from "react";

function Profile({ name, age, job }) {
  return (
    <>
      <h3>Nome: {name}</h3>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
    </>
  );
}

export default Profile;
