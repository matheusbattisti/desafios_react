import "./App.css";
import TernaryComponent from "./components/TernaryComponent";

function App() {
  return (
    <>
      {/* 1 - Renderização com ternário */}
      <h2>1 - Renderização com ternário</h2>
      <TernaryComponent condition={false} />
    </>
  );
}

export default App;
