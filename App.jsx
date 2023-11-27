import React from "react";
import CreateUser from "./components/CreateUser";
import ShowUsers from "./components/ShowUsers";
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
          <ShowUsers />
          <FindUser />
        </UrlProvider>
      </UsersProvider>
    </div>
  );
}

export default App;
