import React, { useEffect, useState } from "react";
import styles from "./search.module.css";

//const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API = "b9b45ccc6113456db685c84b7b5f236f";

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.Search}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
};

export default Search;
