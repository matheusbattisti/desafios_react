import "./App.css";

// 1 - Formulário de Registro
import RegistrationForm from "./components/RegistrationForm";

// 2 - Formulário com campos dinâmicos
import DynamicForm from "./components/DynamicForm";

// 3 - Formulário com validações
import ValidationForm from "./components/ValidationForm";

// 4 - Upload de arquivo
import FileUploader from "./components/FileUploader";

// 5 - Formulário Multistep
import MultiPartForm from "./components/MultiPartForm";

function App() {
  return (
    <>
      <h2>1 - Formulário de Registro</h2>
      <RegistrationForm />
      <h2>2 - Formulário com campos dinâmicos</h2>
      <DynamicForm />
      <h2>3 - Formulário com validações</h2>
      <ValidationForm />
      <h2>4 - Upload de arquivo</h2>
      <FileUploader />
      <h2>5 - Formulário multistep</h2>
      <MultiPartForm />
    </>
  );
}

export default App;
