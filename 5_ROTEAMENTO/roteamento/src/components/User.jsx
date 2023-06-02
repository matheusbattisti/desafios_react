import React from "react";
import { useParams } from "react-router-dom";

function User() {
  let { userId } = useParams();
  return <h2>ID do Usuário: {userId}</h2>;
}

export default User;
