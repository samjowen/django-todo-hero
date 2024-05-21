import { useMutation, useQueryClient } from "@tanstack/react-query";
import createTodo from "../api/Todo/createTodo";

interface CreateTodoData {
  title: string;
  task: string;
}

type useCreateTodoProps = {
  onSuccess?: () => void;
};

const useCreateTodo = ({ onSuccess }: useCreateTodoProps) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  const createNewTodo = (todoData: CreateTodoData) => {
    mutate(todoData);
  };

  return {
    createNewTodo,
    isPending,
    error,
  };
};

export default useCreateTodo;
