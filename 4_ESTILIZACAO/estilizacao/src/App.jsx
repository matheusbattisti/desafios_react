import "./App.css";

// 1 - HelloWorld com estilo
import HelloWorld from "./components/HelloWorld";

// 2 - Estilo com CSS externo
import Button from "./components/Button";

// 3 - Tema light e dark
import ThemeToggle from "./components/ThemeToggle";

// 4 - Styled Components
import StyledComponentExample from "./components/StyledComponentExample";

// 5 - Exercício com SASS
import Card from "./components/Card";

function App() {
  return (
    <>
      <h2>1 - HelloWorld com estilo</h2>
      <HelloWorld />
      <h2>2 - Estilo com CSS externo</h2>
      <Button />
      <h2>3 - Tema light e dark</h2>
      <ThemeToggle />
      <h2>4 - Styled Components</h2>
      <StyledComponentExample />
      <h2>5 - Exercício com SASS</h2>
      <Card title="Título" body="Esta é a descrição do card." />
    </>
  );
}

export default App;
