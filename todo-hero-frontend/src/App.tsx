import React from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import getTodos from "./api/Todo/getTodos";
import TodoList from "./components/templates/TodoList";

function App() {
  const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  return (
    <div className="flex flex-col h-screen w-screen">
      <section className="w-full h-1/2" id="todo-list">
        <TodoList todos={data || []} onTodoClick={(id) => console.log(id)} />
      </section>

      <section className="w-full h-1/2" id="todo-form">
        Todo Form
      </section>
    </div>
  );
}

export default App;
