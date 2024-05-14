import React, { useEffect, useContext } from "react";
import "./App.css";
import { GlobalContext } from "./context";
import Home from "./pages/home";
import Skills from "./pages/skills";

function App() {
  const { currSlide, setCurrSlide } = useContext(GlobalContext);

  const listener = async (e) => {
    await setCurrSlide((currSlide + 1) % 2);
  };

  useEffect(() => {
    // console.log(currSlide);
    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  });

  return (
    <React.StrictMode>
      <Home currSlide={currSlide} />
      <Skills currSlide={currSlide} />
    </React.StrictMode>
  );
}

export default App;
