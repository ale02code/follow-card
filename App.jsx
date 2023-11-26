import React from "react";
import CreateUser from "./components/CreateUser";
import ShowAndFollow from "./components/ShowAndFollow";
import FindUser from "./components/FindUser";
import { UsersProvider } from "./context/UsersContext";
import { UrlProvider } from "./context/UrlContext";
import "./app.css";

function App() {
  return (
    <div className="app">
      <UsersProvider>
        <UrlProvider>
          <CreateUser />
          <ShowAndFollow />
          <FindUser />
        </UrlProvider>
      </UsersProvider>
    </div>
  );
}

export default App;
