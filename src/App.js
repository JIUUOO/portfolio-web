import React, { useEffect, useContext } from "react";
import "./App.css";
import { GlobalContext } from "./context";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Footer from "./components/footer";

const PAGE_COUNT = 3;

function App() {
  const { currSlide, setCurrSlide } = useContext(GlobalContext);

  const listener = async (e) => {
    // console.dir(e.srcElement.localName);
    // when user clicks a link, slide remains
    if (e.srcElement.localName !== "a") {
      await setCurrSlide((currSlide + 1) % PAGE_COUNT);
    }
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
      <div>
        <Home currSlide={currSlide} />
        <Skills currSlide={currSlide} />
        <Contact currSlide={currSlide} />
      </div>
    </React.StrictMode>
  );
}

export default App;
