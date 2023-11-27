import React, { createContext, useState } from "react";

const UrlContext = createContext();

function UrlProvider({ children }) {
  const [url, setUrl] = useState("");
  const ProfileIconDefault =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png";
  return (
    <UrlContext.Provider value={{ url, setUrl, ProfileIconDefault }}>
      {children}
    </UrlContext.Provider>
  );
}

export { UrlContext, UrlProvider };
