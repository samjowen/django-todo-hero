import "./App.css";
import TodoList from "./components/templates/TodoList";
import useTodoList from "./hooks/useTodoList";

function App() {
  const { todos } = useTodoList();

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Todo List Section */}
      <section className="w-full h-1/2 overflow-scroll" id="todo-list">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <TodoList todos={todos} />
      </section>
      {/* Create Todo Form Section */}
      <section className="w-full h-1/2" id="todo-form">
        Todo Form
      </section>
    </div>
  );
}

export default App;
