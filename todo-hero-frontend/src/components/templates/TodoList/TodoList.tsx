import React from "react";

import TodoListEmpty from "./TodoListEmpty";
import TodoCard from "../Todo/TodoCard";
import { type Todo } from "../../../types/Todo";
import FlexList from "../../primitives/FlexList";

type TodoListProps = {
  todos: Todo[];
  completeTodoCallback: (id: string) => void;
  unCompleteTodoCallback: (id: string) => void;
  requestInProgress: boolean;
};

const TodoList = ({
  todos,
  completeTodoCallback,
  unCompleteTodoCallback,
  requestInProgress = false,
}: TodoListProps) => {
  if (todos.length === 0) {
    return <TodoListEmpty />;
  }

  return (
    <FlexList direction={"row"}>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          completeTodoCallback={() => completeTodoCallback(todo.id)}
          unCompleteTodoCallback={() => unCompleteTodoCallback(todo.id)}
          requestInProgress={requestInProgress}
        />
      ))}
    </FlexList>
  );
};

export default TodoList;
