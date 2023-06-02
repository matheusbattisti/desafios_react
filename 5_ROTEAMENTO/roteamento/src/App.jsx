import "./App.css";

import { Outlet } from "react-router-dom";

// 3 - Links de navegação
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <Navbar />
      <SearchForm />
      <Outlet />
    </>
  );
}

export default App;
