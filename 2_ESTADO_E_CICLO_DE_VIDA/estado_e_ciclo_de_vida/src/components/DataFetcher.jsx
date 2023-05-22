import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Olá, os dados chegaram da API" });
    }, 2000);
  }, []);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return <p>{data.message}</p>;
}

export default DataFetcher;
