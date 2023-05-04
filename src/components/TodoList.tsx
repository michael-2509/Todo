import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "../store";

const TodoList = () => {
  const data = useSelector((state: RootState) => state.inputReducer.todoData);
  console.log(data);
  return (
    <>
      <ul>
        {data.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
