import styles from "./foodItem.module.css";

const FoodItem = ({ food, setFoodID }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemimage} src={food.image} />
      <div className={styles.itemcontent}>
        <p className={styles.itemname}>{food.title}</p>
      </div>
      <div className={styles.itembcontainer}>
        {" "}
        <button
          onClick={() => {
            setFoodID(food.id);
          }}
          className={styles.itembutton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
