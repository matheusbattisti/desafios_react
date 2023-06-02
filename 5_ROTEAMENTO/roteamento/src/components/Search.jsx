import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  // lógica para exibir resultados de busca com base na consulta

  return <div>Resultados de busca para: {query}</div>;
};

export default Search;
