import { useDispatch } from "react-redux";
import { InputAction } from "../store/input-slice";

const Category = () => {
  const dispatch = useDispatch();

  const handleFilterClick = (filterType: string) => {
    dispatch(InputAction.setFilterType(filterType));
  };

  return (
    <div className="mt4 m-auto flex w-10/12 justify-center gap-4 bg-Very-Dark-Desaturated-Blue px-4 py-3 text-white">
      <p onClick={() => handleFilterClick("all")}>All</p>
      <p onClick={() => handleFilterClick("active")}>Active</p>
      <p onClick={() => handleFilterClick("completed")}>Completed</p>
    </div>
  );
};

export default Category;
