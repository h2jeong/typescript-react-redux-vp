import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleTodo, removeTodo } from "../modules/todos";

export default function useTodoActions() {
  const dispatch = useDispatch();

  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(removeTodo(id)), [dispatch]);

  return { onToggle, onRemove };
}
