type TodoItemProps = {
  title: string;
};

const TodoItem = ({ title }: TodoItemProps) => {
  console.log(title);
  return (
    <>
      <li>{title}</li>
    </>
  );
};

export default TodoItem;
