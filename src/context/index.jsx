import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [userKey, setUserKey] = useState("");

  return (
    <GlobalContext.Provider value={{ userKey, setUserKey }}>
      {children}
    </GlobalContext.Provider>
  );
}
