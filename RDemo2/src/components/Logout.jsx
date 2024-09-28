import React, { useContext } from "react";
import { userContext } from "../Context/UserContext";

const Logout = () => {
  const { dispatcher } = useContext(userContext);
  return (
    <div>
      <button onClick={() => dispatcher({ type: "logout", payload: "guest" })}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
