import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, settodos }) => {
  //const [todo, settodo] = useState("");
  const [todo, settodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
  }
  return (
    <form
      className={styles.todoform}
      onSubmit={
        //   e.preventDefault();
        //   settodos([...todos, todo]);
        //   settodo("");
        handleSubmit
      }
    >
      <div className={styles.inputContainer}>
        <input
          className={styles.moderninput}
          onChange={(e) => settodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="kya karan hai?"
        />
        <button className={styles.modernbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
