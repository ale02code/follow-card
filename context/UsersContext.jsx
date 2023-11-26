import React, { createContext, useState } from "react";

// Inicializamos el contexto de los usuarios
const UsersContext = createContext();

// Creamos el proveedor de el contexto
function UsersProvider({ children }) {
  const [usersList, setUsersList] = useState([]);

  return (
    <UsersContext.Provider value={{ usersList, setUsersList }}>
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
