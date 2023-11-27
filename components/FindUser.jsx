import React from "react";
import UsersSearch from "../hooks/useSearchUser.js";

function FindUser() {
  const { setValueSearch, filterResults, setShowList, showList, valueSearch } =
    UsersSearch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const value = event.target.value;
    setValueSearch(value);
  }

  function handleShow() {
    setShowList(!showList);
  }

  return (
    <div className="target">
      <strong className="main-title">Search user</strong>
      <form onSubmit={handleSubmit} className="form-search-user">
        <input
          type="text"
          className="input-search"
          placeholder="Example..."
          onChange={handleChange}
        />
      </form>
      <div>
        {valueSearch == "" ? (
          <p className="search-some-user-paragraph">
            let's go to search some user
          </p>
        ) : (
          filterResults.map((user, index) => (
            <div key={index} className="user">
              <img
                src={user.url}
                alt={`${user.userName} avatar`}
                title={user.userName}
                className="avatar-image"
              />
              <div className="user-info-container">
                <strong>{user.name}</strong>
                <p>{`@${user.userName}`}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FindUser;
