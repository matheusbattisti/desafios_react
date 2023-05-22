import React, { useState, useEffect } from "react";

function WindowWidthChecker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <h2>Largura da tela: {windowWidth}px</h2>;
}

export default WindowWidthChecker;
