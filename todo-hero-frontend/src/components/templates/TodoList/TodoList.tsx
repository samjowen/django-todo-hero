import React from "react";

import TodoListEmpty from "./TodoListEmpty";
import TodoCard from "../Todo/TodoCard";
import { type Todo } from "../../../types/Todo";
import FlexList from "../../primitives/FlexList";
import useTodoList from "../../../hooks/useTodoList";

type TodoListProps = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodoListProps) => {
  const { handleCompleteTodo, handleUncompleteTodo } = useTodoList();

  if (todos.length === 0) {
    return <TodoListEmpty />;
  }

  return (
    <FlexList direction={"row"}>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          completeTodoCallback={handleCompleteTodo}
          unCompleteTodoCallback={handleUncompleteTodo}
        />
      ))}
    </FlexList>
  );
};

export default TodoList;
