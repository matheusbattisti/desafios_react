import "./App.css";

// 1 - HelloWorld com estilo
import HelloWorld from "./components/HelloWorld";

// 2 - Estilo com CSS externo
import Button from "./components/Button";

function App() {
  return (
    <>
      <h2>1 - HelloWorld com estilo</h2>
      <HelloWorld />
      <h2>2 - Estilo com CSS externo</h2>
      <Button />
    </>
  );
}

export default App;
