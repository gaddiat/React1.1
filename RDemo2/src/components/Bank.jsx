import React, { useReducer, useState } from "react";

const Bank = () => {
  const [state, dispatcher] = useReducer(reducer, { balance: 100000 });
  const [amount, setAmount] = useState(1000);
  function reducer(state, action) {
    return action.type === "deposit"
      ? { ...state, balance: state.balance + action.payload }
      : action.type === "Withdraw"
      ? { ...state, balance: state.balance - action.payload }
      : { ...state, balance: state.balance };
  }
  return (
    <div>
      Balance : {state.balance}
      <br></br>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br></br>
      <button
        onClick={() => dispatcher({ type: "deposit", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() =>
          dispatcher({ type: "Withdraw", payload: Number(amount) })
        }
      >
        Withdrawl
      </button>
    </div>
  );
};

export default Bank;
