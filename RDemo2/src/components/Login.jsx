import React, { useContext, useState } from "react";
import { userContext } from "../Context/UserContext";

const Login = () => {
  const [value, setValue] = useState("");
  const { dispatcher } = useContext(userContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(),
            //setUser(value);
            dispatcher({ type: "login", payload: value });
        }}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
