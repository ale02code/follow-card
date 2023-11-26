import React, { useState, useContext, useEffect } from "react";
import { UsersContext } from "../context/UsersContext";
import { UrlContext } from "../context/UrlContext";

function CreateUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const { setUsersList } = useContext(UsersContext);
  const { url, setUrl } = useContext(UrlContext);

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
      userName,
      url,
    };
    setUsersList((prevState) => [...prevState, newUser]);
    setName("");
    setUserName("");
    setUrl("");

    console.log("image:", url);
  };

  return (
    <div className="target">
      <strong className="main-title">Create new user</strong>
      <form onSubmit={handleSubmit} className="form-create">
        <input
          type="text"
          placeholder="Name"
          required
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
          name="image"
          accept="image/png, image/jpeg"
          onChange={handleURL}
        />
        <button>Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
