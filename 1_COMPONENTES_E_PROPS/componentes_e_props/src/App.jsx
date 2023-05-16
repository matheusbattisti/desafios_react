import "./App.css";

// 1 - Criando um Componente Simples
import HelloWorld from "./components/HelloWorld";

// 2 - Usando props
import HelloName from "./components/HelloName";

// 3 - Múltiplas props
import Profile from "./components/Profile";

// 4 - Composição de componentes
import Family from "./components/Family";

// 5 - Componente de classe
import ProfileClass from "./components/ProfileClass";

// 6 - Componente com estado
import Counter from "./components/Counter";

function App() {
  const members = [
    { name: "John", age: 30, job: "Advogado" },
    { name: "Jane", age: 28, job: "Engenheira" },
    { name: "Paul", age: 45, job: "Mecânico" },
  ];

  return (
    <>
      <h2>1 - Criando um Componente Simples</h2>
      <HelloWorld />
      <h2>2 - Usando props</h2>
      <HelloName name="Matheus" />
      <h2>3 - Múltiplas props</h2>
      <Profile name="João" age={30} job="Programador" />
      <h2>4 - Composição de componentes</h2>
      <Family members={members} />
      <h2>5 - Componente de classe</h2>
      <ProfileClass name="Maria" age={19} job="Arquiteta" />
      <h2>6 - Componente com estado</h2>
      <Counter />
    </>
  );
}

export default App;
