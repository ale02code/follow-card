import React, { createContext, useState } from "react";

const UrlContext = createContext();

function UrlProvider({ children }) {
  const [url, setUrl] = useState("");
  return (
    <UrlContext.Provider value={{ url, setUrl }}>
      {children}
    </UrlContext.Provider>
  );
}

export { UrlContext, UrlProvider };
