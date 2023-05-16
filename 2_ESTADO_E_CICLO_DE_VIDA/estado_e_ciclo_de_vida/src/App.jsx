import "./App.css";

// 1 - Usando o Estado
import Toggle from "./components/Toggle";

// 2 - Múltiplos Estados
import ToggleMultiplo from "./components/ToggleMultiplo";

function App() {
  return (
    <>
      <h2>1 - Usando o Estado</h2>
      <Toggle />
      <h2>2 - Múltiplos Estados</h2>
      <ToggleMultiplo />
    </>
  );
}

export default App;
