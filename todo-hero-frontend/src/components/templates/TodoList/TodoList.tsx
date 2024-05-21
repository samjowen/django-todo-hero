import React from "react";

import TodoListEmpty from "./TodoListEmpty";
import TodoCard from "../Todo/TodoCard";
import { type Todo } from "../../../types/Todo";
import FlexList from "../../primitives/FlexList";

type TodoListProps = {
  todos: Todo[];
  onTodoClick: (id: string) => void;
};

const TodoList = ({ todos, onTodoClick }: TodoListProps) => {
  if (todos.length === 0) {
    return <TodoListEmpty />;
  }

  return (
    <FlexList direction={"row"}>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onClick={() => onTodoClick(todo.id)}
        />
      ))}
    </FlexList>
  );
};

export default TodoList;
