import React from "react";

const Phal = ({ name, price, empji, hain }) => {
  // return (
  //   <li>
  //     {/* {name} {price} {empji} */}

  //     {price > 1.3 ? (
  //       <h1>
  //         {name} {price} {empji}
  //       </h1>
  //     ) : (
  //       " "
  //     )}
  //   </li>
  // );

  return (
    <>
      {price >= 1 ? (
        <li>
          {name} {price} {empji} {hain ? "hain" : "nahi hain"}
        </li>
      ) : (
        " "
      )}
    </>
  );
};

export default Phal;
