import { createContext, useReducer, useState } from "react";
const userContext = createContext();

function UserProvider({ children }) {
  //const [user, setUser] = useState("guest");
  const [user, dispatcher] = useReducer(userReducer, "");
  function userReducer(state, action) {
    return action.type === "login"
      ? action.payload
      : action.type === "logout"
      ? action.payload
      : "";
  }
  return (
    <userContext.Provider value={{ user, dispatcher }}>
      {children}
    </userContext.Provider>
  );
}

export { UserProvider, userContext };
