import React, { useState } from "react";
import InputField from "../../primitives/InputField";

const CreateTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoTask, setTodoTask] = useState("");

  return (
    <>
      <form className="flex flex-col w-1/2 gap-2 p-6 justify-center ml-auto mr-auto shadow-md border">
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
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Todo
          </button>
        </section>
      </form>
    </>
  );
};

export default CreateTodoForm;
