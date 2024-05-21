import React from "react";
import Card from "../../primitives/Card";
import Checkbox from "../../primitives/Checkbox";
import { type Todo } from "../../../types/Todo";
import useTodoList from "../../../hooks/useTodoList";

type TodoCardProps = {
  todo: Todo;
  completeTodoCallback: (id: Todo["id"]) => void;
  unCompleteTodoCallback: (id: Todo["id"]) => void;
};

const TodoCard = ({
  todo,
  completeTodoCallback,
  unCompleteTodoCallback,
}: TodoCardProps) => {
  const { isCompletePending, isUnCompletePending } = useTodoList();

  const requestInProgress = isCompletePending || isUnCompletePending;

  return (
    <Card className="mb-4">
      <Card.Title>{todo.title}</Card.Title>
      <Card.Content>
        {todo.task}
        <span className="flex gap-2">
          {" "}
          Completed{" "}
          <Checkbox
            readOnly
            onCheck={() => completeTodoCallback(todo.id)}
            onUncheck={() => unCompleteTodoCallback(todo.id)}
            checked={todo.is_completed}
            disabled={requestInProgress}
          />
        </span>
      </Card.Content>
    </Card>
  );
};

export default TodoCard;
