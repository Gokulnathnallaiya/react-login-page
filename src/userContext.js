import React, { useState, createContext } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({
      email:"",
      password:""
  });

  return <UserContext.Provider value={{userstate:[user,setUser]}}>{props.children}</UserContext.Provider>;
};
