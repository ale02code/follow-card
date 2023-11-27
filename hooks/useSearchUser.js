import { useEffect, useState, useContext } from "react";
import { UsersContext } from '../context/UsersContext.jsx';

function useSearchUser() {
  const [valueSearch, setValueSearch] = useState("");
  const [filterResults, setFilterResults] = useState([]);
  const { usersList } = useContext(UsersContext);

  useEffect(() => {
    const usersfilters = usersList.filter((user) => {
      return user.userName.toLowerCase().includes(valueSearch.toLowerCase())
    })

    setFilterResults(usersfilters);
  }, [valueSearch, usersList])

  return { setValueSearch, filterResults, valueSearch };
}

export default useSearchUser;
