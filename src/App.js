import React, { useEffect, useContext } from "react";
import "./App.css";
import { GlobalContext } from "./context";
import Slides from "./page/slides";

const TOTAL_PAGE = 4;

function App() {
  const { currSlide, setCurrSlide, userKey, setUserKey } =
    useContext(GlobalContext);

  const clickListener = (e) => {
    // exception handling
    // when user clicks a link, the slide remains
    if (e.srcElement.localName !== "a") {
      setCurrSlide((currSlide + 1) % TOTAL_PAGE);
    }
  };

  // prevent perfoming continuous 'next slide'
  const keydownListener = (e) => {
    // console.log(e.key);
    if (userKey) {
      console.log();
      if (e.key === "ArrowRight" || e.key === " ") {
        setCurrSlide((currSlide + 1) % TOTAL_PAGE);
      }

      if (e.key === "ArrowLeft") {
        setCurrSlide((currSlide + (TOTAL_PAGE - 1)) % TOTAL_PAGE);
      }

      setUserKey(false);
    }
  };

  // prevent spacebar scrolling
  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault();
    }
  });

  const keyupListener = (e) => {
    setUserKey(true);
  };

  useEffect(() => {
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
      <Slides />
    </React.StrictMode>
  );
}

export default App;
