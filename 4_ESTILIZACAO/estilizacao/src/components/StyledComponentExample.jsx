import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #456;
  color: #fff;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: none;
  border-radius: 3px;
`;

function StyledComponentExample() {
  return <StyledButton>Clique em mim!</StyledButton>;
}

export default StyledComponentExample;
