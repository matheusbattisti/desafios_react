import "./App.css";
import TernaryComponent from "./components/TernaryComponent";

import SwitchCaseComponent from "./components/SwitchCaseComponent";
import NestedListComponent from "./components/NestedListComponent";
import TimeBasedComponent from "./components/TimeBasedComponent";
import MultiSelectList from "./components/MultiSelectList";

function App() {
  return (
    <>
      {/* 1 - Renderização com ternário */}
      <h2>1 - Renderização com ternário</h2>
      <TernaryComponent condition={false} />
      {/* 2 - Renderização Condicional com Switch Case */}
      <h2>2 - Renderização Condicional com Switch Case</h2>
      <SwitchCaseComponent value="2" />
      {/* 3 - Renderização de Listas Aninhadas */}
      <h2>Renderização de Listas Aninhadas</h2>
      <NestedListComponent />
      {/* 4 - Renderização Condicional Baseada no Tempo */}
      <h2>Renderização Condicional Baseada no Tempo</h2>
      <TimeBasedComponent />
      {/* 5 - Lista de Seleção Múltipla */}
      <h2>Lista de Seleção Múltipla</h2>
      <MultiSelectList />
    </>
  );
}

export default App;
