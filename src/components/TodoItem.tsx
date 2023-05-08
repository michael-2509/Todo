import Image from "next/image";
import circle from "../../public/assets/icon-circle.svg";
import check from "../../public/assets/icon-check.svg";
import cross from "../../public/assets/icon-cross.svg";
import { useDispatch } from "react-redux";
import { InputAction } from "../store/input-slice";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  const dispatch = useDispatch();

  const completeHandler = () => {
    dispatch(InputAction.toggleCompleteHandler(id));
  };

  const deleteHandler = () => {
    dispatch(InputAction.removeHandler(id));
  };

  return (
    <>
      <li className="m-auto flex w-full items-center justify-between border-b-[1px]  border-light-grayish-blue px-4 py-3 text-white ">
        <div className="flex gap-4">
          <button
            onClick={completeHandler}
            className={`${
              completed ? "h-5 w-5 rounded-2xl bg-[purple]" : ""
            } text-opacity-50 focus:outline-none`}
          >
            {completed ? (
              <Image className="m-auto" src={check} alt="check" />
            ) : (
              <Image src={circle} alt="circle" />
            )}
          </button>

          <p className={` ${completed ? "line-through opacity-50" : ""}`}>
            {title}
          </p>
        </div>

        <button onClick={deleteHandler} className="focus:outline-none">
          <Image src={cross} alt="close" />
        </button>
      </li>
    </>
  );
};

export default TodoItem;
