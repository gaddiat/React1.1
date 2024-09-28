import Phal from "./Phal";

const Fruits = () => {
  //   const fruits = ["plum", "pineapple"];
  const fruits = [
    { name: "plum", price: 1, empji: "🍑", hain: true },
    { name: "pineapple", price: 1.5, empji: "🍍", hain: true },
    { name: "grapes", price: 2, empji: "🍇", hain: true },
    { name: "Straw", price: 2, empji: "🍓", hain: false },
  ];
  return (
    <div>
      {/* <ol>
        {fruits.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ol> */}

      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.empji} ${fruit.price}
          </li>
        ))}
      </ul> */}

      <ol>
        {fruits.map((fruit) => (
          <Phal
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            empji={fruit.empji}
            hain={fruit.hain}
          />
        ))}
      </ol>
    </div>
  );
};

export default Fruits;
