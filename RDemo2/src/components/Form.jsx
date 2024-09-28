import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");

  //   function handleChnage(e) {
  //    setname(e.target.value)
  //   }

  return (
    <div>
      <form>
        <input
          //   onChange={(e) => handleChnage(e)}
          onChange={(e) => setname(e.target.value)}
          type="text"
          value={name}
          placeholder="Naam bol"
        />
      </form>
    </div>
  );
};

export default Form;
