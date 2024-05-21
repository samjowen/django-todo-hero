import React, { useState, useCallback } from "react";
import InputField from "../../primitives/InputField";
import useCreateTodo from "../../../hooks/useCreateTodo";

const CreateTodoForm: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoTask, setTodoTask] = useState<string>("");

  const handleSuccess = useCallback(() => {
    setTodoTitle("");
    setTodoTask("");
  }, []);

  const { createNewTodo, isPending, error } = useCreateTodo({
    onSuccess: handleSuccess,
  });

  const handleCreateTodo = useCallback(() => {
    createNewTodo({ title: todoTitle, task: todoTask });
  }, [todoTitle, todoTask, createNewTodo]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateTodo();
      }}
      className="flex flex-col w-1/2 gap-2 p-6 justify-center ml-auto mr-auto shadow-md border"
    >
      <h1 className="text-2xl font-bold text-center">Create Todo</h1>
      <section className="flex flex-col gap-2 mt-4">
        <InputField
          placeholder="Enter todo title"
          value={todoTitle}
          label="Todo title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <InputField
          placeholder="Enter todo task"
          value={todoTask}
          label="Todo task"
          onChange={(e) => setTodoTask(e.target.value)}
        />
        {error && (
          <div className="text-red-500" role="alert" aria-live="assertive">
            Error: {error.message}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending ? "Creating..." : "Create Todo"}
        </button>
      </section>
    </form>
  );
};

export default CreateTodoForm;
