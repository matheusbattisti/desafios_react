import React, { useState, useEffect } from "react";
import styles from "./Theme.module.css";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className =
      theme === "light" ? styles.lightTheme : styles.darkTheme;
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Alternar Tema
      </button>
    </div>
  );
}

export default ThemeToggle;
