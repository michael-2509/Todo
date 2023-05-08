import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TodoItem } from "../store/input-slice";

export const useFilteredTodoData = (data: TodoItem[]) => {
  const filter = useSelector((state: RootState) => state.inputReducer.filter);

  switch (filter) {
    case "all":
      return data;
    case "completed":
      return data.filter((todo) => todo.completed);
    case "active":
      return data.filter((todo) => !todo.completed);
    default:
      return data;
  }
};
