import React, { ChangeEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

import { InputAction } from "../store/input-slice";

const Input = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo("");
    const newItem = { id: Date.now().toString(), title: todo };
    dispatch(InputAction.submitHandler(newItem));
  };

  const setTodoChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      {" "}
      <input
        type="text"
        placeholder="Create a new todo..."
        className="m-auto block w-full rounded-md bg-Very-Dark-Desaturated-Blue px-4 py-3 text-white outline-none"
        value={todo}
        onChange={setTodoChangeHandler}
      />
    </form>
  );
};

export default Input;
