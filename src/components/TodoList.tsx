import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "../store";
import { InputAction } from "../store/input-slice";
import Category from "./category";
import { useFilteredTodoData } from "../helper";
import { filter } from "minimatch";

const TodoList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.inputReducer.todoData);
  const filteredData = useFilteredTodoData(data);
  console.log(filteredData);

  const clearCompletedHandler = () => {
    dispatch(InputAction.clearCompletedHandler());
  };

  return (
    <>
      <ul
        className="m-auto mt-[-25px] w-10/12
       rounded-md bg-Very-Dark-Desaturated-Blue"
      >
        {filteredData.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        ))}
        <div className="flex justify-between px-4 py-3 text-[14px] text-white opacity-50 ">
          <p>
            {filteredData.length} Item{filteredData.length > 1 ? "s" : ""}{" "}
            {filteredData.length > 0 ? "left" : ""}
          </p>

          <p onClick={clearCompletedHandler}>Clear Complete</p>
        </div>
      </ul>
      <div className="mt-4">
        <Category />
      </div>
    </>
  );
};

export default TodoList;
