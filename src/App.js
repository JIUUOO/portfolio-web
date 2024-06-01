import React, { useEffect, useContext } from "react";
import "./App.css";
import { GlobalContext } from "./context";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Footer from "./components/footer";

const PAGE_COUNT = 3;

function App() {
  const { currSlide, setCurrSlide, userKey, setUserKey } =
    useContext(GlobalContext);

  const clickListener = (e) => {
    // console.dir(e.srcElement.localName);

    // when user clicks a link, slide remains
    if (e.srcElement.localName !== "a") {
      setCurrSlide((currSlide + 1) % PAGE_COUNT);
    }
  };

  const keydownListener = (e) => {
    if (userKey) {
      if (e.key === "ArrowRight") {
        setCurrSlide((currSlide + 1) % PAGE_COUNT);
      }

      if (e.key === "ArrowLeft") {
        setCurrSlide((currSlide + (PAGE_COUNT - 1)) % PAGE_COUNT);
      }
      setUserKey(false);
    }
  };

  const keyupListener = (e) => {
    setUserKey(true);
  };

  useEffect(() => {
    // console.log(currSlide);

    window.addEventListener("click", clickListener);
    window.addEventListener("keydown", keydownListener);
    window.addEventListener("keyup", keyupListener);

    return () => {
      window.removeEventListener("click", clickListener);
      window.removeEventListener("keydown", keydownListener);
      window.removeEventListener("keyup", keyupListener);
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
