import React, { useState } from "react";

const Elu = () => {
  const [text, setText] = useState("");

  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Mujhko kuch bhi pucho "
        style={{ width: "400px" }}
      />
      <br />
      <button onClick={(e) => setMessage("ELU hai!!! 😘")}>pucho</button>
      <br />
      <h1>{message}</h1>
    </div>
  );
};

export default Elu;
