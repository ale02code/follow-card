import React, { useState, useContext, useEffect } from "react";
import { UsersContext } from "../context/UsersContext";
import { UrlContext } from "../context/UrlContext";
import PreviewIcon from "./PrevImageIcon";

function CreateUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const { setUsersList } = useContext(UsersContext);
  const { url, setUrl, ProfileIconDefault } = useContext(UrlContext);

  const handleName = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
  };

  const handleUserName = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
  };

  const handleURL = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const createUrl = URL.createObjectURL(selectedFile);
      setUrl(createUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      userName: userName ?? "unknown",
      url: url || ProfileIconDefault,
    };
    setUsersList((prevState) => [...prevState, newUser]);
    setName("");
    setUserName("");
    setUrl("");
  };

  return (
    <div className="target">
      <strong className="main-title">Create new user</strong>
      <form onSubmit={handleSubmit} className="form-create">
        <input
          type="text"
          placeholder="Name"
          onChange={handleName}
          value={name}
        />
        <input
          type="text"
          placeholder="Username"
          required
          onChange={handleUserName}
          value={userName}
        />
        <input
          type="file"
          name="myfile"
          accept="image/png, image/jpeg"
          onChange={handleURL}
          className="inputfile"
        />
        <div className="footer-prev-create">
          <PreviewIcon></PreviewIcon>
          <button>Create User</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
