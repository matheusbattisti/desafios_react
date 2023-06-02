import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
