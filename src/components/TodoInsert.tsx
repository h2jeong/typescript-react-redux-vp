import * as React from "react";
import useAddTodo from "../hooks/useAddTodo";

function TodoInsert() {
  const [value, setValue] = React.useState("");
  const addTodo = useAddTodo();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
