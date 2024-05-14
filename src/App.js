import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Skills from "./pages/skills";

const listener = (e) => {
  console.log(e);
};

function App() {
  useEffect(() => {
    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  });

  return (
    <React.StrictMode>
      <Home />
      <Skills />
    </React.StrictMode>
  );
}

export default App;
