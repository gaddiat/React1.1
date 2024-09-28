import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {" "}
        <h1>tu ne mujhoko {count} baar dabaya !!</h1>
      </button>
      <button onClick={decrement}>
        <h1>un daba</h1>
      </button>
    </div>
  );
}

export default Counter;
//setCount(count + 1); vs setCount((c) => c - 1); does not update for multiple (batch) vs updates for more

// // Using `setCount(count + 1)`
// setCount(count + 1);
// setCount(count + 1);  // This might only increase the count by 1 because both updates use the same initial `count`.

// // Using `setCount((c) => c + 1)`
// setCount((c) => c + 1);
// setCount((c) => c + 1);  // This will correctly increase the count by 2, since it uses the most up-to-date value.
