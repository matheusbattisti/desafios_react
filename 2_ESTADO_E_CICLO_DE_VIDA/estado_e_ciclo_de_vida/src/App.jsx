import "./App.css";

// 1 - Usando o Estado
import Toggle from "./components/Toggle";

// 2 - Múltiplos Estados
import ToggleMultiplo from "./components/ToggleMultiplo";

// 3 - Relógio em tempo real
import Clock from "./components/Clock";

// 4 - Lista de Tarefas
import TodoList from "./components/TodoList";

// 6 - Verificar de lagura de tela
import WindowWidthChecker from "./components/WindowWidthChecker";

// 7 - Simulação de requisição para API
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
    <>
      <h2>1 - Usando o Estado</h2>
      <Toggle />
      <h2>2 - Múltiplos Estados</h2>
      <ToggleMultiplo />
      <h2>3 - Relógio em tempo real</h2>
      <Clock />
      <h2>4 - Lista de Tarefas</h2>
      <TodoList />
      <h2>6 - Verificar de lagura de tela</h2>
      <WindowWidthChecker />
      <h2>7 - Simulação de requisição para API</h2>
      <DataFetcher />
    </>
  );
}

export default App;
