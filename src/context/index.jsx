import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [currSlide, setCurrSlide] = useState(0);
  const [userKey, setUserKey] = useState(true);

  return (
    <GlobalContext.Provider
      value={{ currSlide, setCurrSlide, userKey, setUserKey }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
