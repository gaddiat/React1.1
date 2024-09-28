import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
  const [todos, settodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const TotalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
      <Footer ct={completedTodos} tt={TotalTodos} />
    </div>
  );
};

export default Todo;
