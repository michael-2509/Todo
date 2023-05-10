import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Image from "next/image";
import { RootState } from "../store";

import circle from "../../public/assets/icon-circle.svg";
import check from "../../public/assets/icon-check.svg";
import cross from "../../public/assets/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { InputAction } from "../store/input-slice";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  const dispatch = useDispatch();
  // Use useRef to create a ref for each li element
  const ref = useRef<HTMLLIElement>(null);
  const data = useSelector((state: RootState) => state.inputReducer.todoData);

  const completeHandler = () => {
    dispatch(InputAction.toggleCompleteHandler(id));
  };

  const deleteHandler = () => {
    dispatch(InputAction.removeHandler(id));
  };

  // Define a type constant for your draggable items
  const type = "todo";

  // Use the useDrag hook to make each todo item draggable
  const [{ isDragging }, drag] = useDrag(() => ({
    // Specify the type of the drag source
    type,

    // describes the item being drag
    item: { id, title, completed },

    // a function that is called when the drag operation end
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`You dropped ${item.title} into ${dropResult}!`);
      }
    },

    // a function that returns a property that is used in any component to track the state of the drag source
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    // Specify the accepted types of the drop target
    accept: type,

    // A function that is called when an item is dropped on a target
    drop: () => ({ name: title }),

    //A function that is called when an item is dropped on a target
    hover: (item: TodoItemProps, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = data.findIndex((todo) => todo.id === item.id);
      const hoverIndex = data.findIndex((todo) => todo.id === id);
      console.log(dragIndex, hoverIndex);

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Time to actually perform the action
      dispatch(InputAction.reorderHandler({ dragIndex, hoverIndex }));

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for performance reasons
      // to avoid expensive index searches.
      // item.index = hoverIndex;

      dragIndex == hoverIndex;
    },
    //function that return an object property that is passed to our component  to track the state of a drop target
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // connector function that is used to  achieve drag or drop operation on a component
  drag(ref);
  drop(ref);
  return (
    <>
      <li
        ref={ref}
        className={`m-auto flex w-full items-center justify-between border-b-[1px] border-light-grayish-blue px-4 py-3 text-white ${
          isDragging ? "opacity-50" : ""
        } ${isOver ? "bg-gray-300" : ""}`}
      >
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
