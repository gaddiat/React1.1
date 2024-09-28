import React, { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

const FoodDetails = ({ foodID }) => {
  // const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API = "b9b45ccc6113456db685c84b7b5f236f";
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API}`);
      const data = await response.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodID]);

  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : food ? (
        <div>
          <div className={styles.recipeCard}>
            <h1>{food.title}</h1>
            <div>
              <img src={food.image} alt={food.title} />
              <span>
                <strong>⏲️ {food.readyInMinutes} Minutes</strong>
              </span>
              <span>Serves {food.servings} 👥</span>
              <span>{food.vegetarian ? "🌱 Veg" : "🍗 Non-Veg"}</span>
              <span>{food.vegan ? "Vegan" : ""}</span>
            </div>
            <div>
              <span>
                {" "}
                ${Math.round(food.pricePerServing / 100)} Per Serving
              </span>
            </div>
            <div>
              <ol>
                <h2>Instructions</h2>
                {food.analyzedInstructions &&
                food.analyzedInstructions.length > 0 ? (
                  food.analyzedInstructions[0].steps.map((step, index) => (
                    <li key={index}>{step.step}</li>
                  ))
                ) : (
                  <p>No instructions available.</p>
                )}
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <p>Error loading food data.</p>
      )}
    </div>
  );
};

export default FoodDetails;
