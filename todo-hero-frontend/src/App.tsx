import React, { useCallback } from "react";
import "./App.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getTodos from "./api/Todo/getTodos";
import TodoList from "./components/templates/TodoList";
import completeTodo from "./api/Todo/completeTodo";
import unCompleteTodo from "./api/Todo/unCompleteTodo";
function App() {
  const queryClient = useQueryClient();
  const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  const { mutate: completeTodoFn } = useMutation({
    mutationFn: completeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: unCompleteTodoFn } = useMutation({
    mutationFn: unCompleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleCompleteTodo = useCallback(
    (id: string) => {
      completeTodoFn(id);
    },
    [completeTodoFn]
  );

  const handleUncompleteTodo = useCallback(
    (id: string) => {
      unCompleteTodoFn(id);
    },
    [unCompleteTodoFn]
  );

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Todo List Section */}
      <section className="w-full h-1/2 overflow-scroll" id="todo-list">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <TodoList
          todos={data || []}
          completeTodoCallback={(id) => handleCompleteTodo(id)}
          unCompleteTodoCallback={(id) => handleUncompleteTodo(id)}
        />
      </section>
      {/* Create Todo Form Section */}
      <section className="w-full h-1/2" id="todo-form">
        Todo Form
      </section>
    </div>
  );
}

export default App;
