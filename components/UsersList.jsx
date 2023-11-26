import React, { useContext, useEffect } from "react";
import { UsersContext } from "../context/UsersContext";
import { usersList as defaultUsersList } from "../services/users.js";

function UsersList() {
  const { usersList, setUsersList } = useContext(UsersContext);

  useEffect(() => {
    setUsersList((prevState) => [...prevState, ...defaultUsersList]);
  }, []);

  return (
    <section>
      {usersList.map((user, index) => {
        return (
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
        );
      })}
    </section>
  );
}

export default UsersList;
