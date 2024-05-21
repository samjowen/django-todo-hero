import React from "react";
import Card from "../../primitives/Card";
import Checkbox from "../../primitives/Checkbox";
import { type Todo } from "../../../types/Todo";

type TodoCardProps = {
  todo: Todo;
  completeTodoCallback: (id: Todo["id"]) => void;
  unCompleteTodoCallback: (id: Todo["id"]) => void;
  requestInProgress: boolean;
};

const TodoCard = ({
  todo,
  completeTodoCallback,
  unCompleteTodoCallback,
  requestInProgress,
}: TodoCardProps) => {
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
            positiveCallback={() => completeTodoCallback(todo.id)}
            negativeCallback={() => unCompleteTodoCallback(todo.id)}
            checked={todo.is_completed}
            disabled={requestInProgress}
          />
        </span>
      </Card.Content>
    </Card>
  );
};

export default TodoCard;
