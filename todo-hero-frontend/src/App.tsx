import "./App.css";
import CreateTodoForm from "./components/templates/CreateTodoForm";
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
      <section
        className="flex flex-col w-full h-1/2 items-center justify-center"
        id="todo-form"
      >
        <CreateTodoForm />
      </section>
    </div>
  );
}

export default App;
