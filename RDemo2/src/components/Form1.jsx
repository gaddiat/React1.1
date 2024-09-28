import React, { useState } from "react";

const Form1 = () => {
  const [name, setname] = useState({ fname: "", Lname: "" });

  return (
    <div>
      {name.fname} - {name.Lname}
      <form>
        <input
          onChange={(e) => setname({ ...name, fname: e.target.value })}
          type="text"
          value={name.fname}
        />

        <input
          onChange={(e) => setname({ ...name, Lname: e.target.value })}
          type="text"
          value={name.Lname}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(name);
          }}
        >
          button
        </button>
      </form>
    </div>
  );
};

export default Form1;
