import * as React from "react";
import { Todo } from "../modules/todos";
import useTodoActions from "../hooks/useTodoActions";
import "./TodoItem.css";
type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions();
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <span className="remove" onClick={() => onRemove(todo.id)}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
