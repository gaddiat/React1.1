import styles from "./todoitem.module.css";
const TodoItem = ({ item, todos, settodos }) => {
  function handleClick(item) {
    console.log("deleted" + item);
    settodos(todos.filter((todo) => todo != item));
  }
  function handleClick1(name) {
    settodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.name}>
        <span className={className} onClick={() => handleClick1(item.name)}>
          {item.name}
        </span>

        <span>
          <button onClick={() => handleClick(item)} className={styles.button}>
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
