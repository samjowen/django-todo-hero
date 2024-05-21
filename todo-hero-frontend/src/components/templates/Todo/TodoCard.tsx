import React from "react";
import Card from "../../primitives/Card";
import Checkbox from "../../primitives/Checkbox";
import { type Todo } from "../../../types/Todo";

type TodoCardProps = {
  todo: Todo;
  onClick: (id: Todo["id"]) => void;
};

const TodoCard = ({ todo, onClick }: TodoCardProps) => {
  return (
    <Card className="mb-4">
      <Card.Title>{todo.title}</Card.Title>
      <Card.Content>
        {todo.task}
        <span className="flex gap-2">
          {" "}
          Completed{" "}
          <Checkbox onClick={() => onClick} checked={todo.is_completed} />
        </span>
      </Card.Content>
    </Card>
  );
};

export default TodoCard;
