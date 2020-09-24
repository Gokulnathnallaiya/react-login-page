import React, { useState, createContext } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({
      email:"",
      password:"",
      
      
  });
  const [isloggedIn, setloggedIn ] = useState(false);

  return <UserContext.Provider value={{userstate:[user,setUser], loggedIn:[isloggedIn, setloggedIn] }}>{props.children}</UserContext.Provider>;
};
