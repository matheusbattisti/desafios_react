import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Greeting from "./components/Greeting";
import User from "./components/User";

function App() {
  return (
    <>
      {/* 1 - Teste em componente */}
      <h2>1 - Teste em componente</h2>
      <Greeting name={"Matheus"} />
      {/* 2 - Testes de Simulação de Eventos */}
      <h2>2 - Testes de Simulação de Eventos</h2>
      <Button />
      {/* 3 - Testes de formulários */}
      <h2>3 - Testes de formulários</h2>
      <Form />
      {/* 4 - Teste de API */}
      <h2>4 - Teste de API:</h2>
      <User userId={1} />
    </>
  );
}

export default App;
