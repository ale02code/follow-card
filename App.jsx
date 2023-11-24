import React from "react";
import CreateUser from "./components/CreateUser";
import ShowAndFollow from "./components/ShowAndFollow";
import FindUser from "./components/FindUser";
import "./app.css";

function App() {
  return (
    <div className="app">
      <CreateUser />
      <ShowAndFollow />
      <FindUser />
    </div>
  );
}

export default App;
