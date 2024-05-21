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
      <Card.Content>{todo.task}</Card.Content>
      <Checkbox onClick={() => onClick} checked={todo.isCompleted} />
    </Card>
  );
};

export default TodoCard;
