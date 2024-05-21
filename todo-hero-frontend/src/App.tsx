import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <section className="w-full h-1/2" id="todo-list">
        Todo List
      </section>

      <section className="w-full h-1/2" id="todo-form">
        Todo Form
      </section>
    </div>
  );
}

export default App;
