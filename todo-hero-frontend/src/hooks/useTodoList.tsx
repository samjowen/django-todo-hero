import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import completeTodo from "../api/Todo/completeTodo";
import getTodos from "../api/Todo/getTodos";
import unCompleteTodo from "../api/Todo/unCompleteTodo";

const useTodoList = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  const { mutate: completeTodoFn, isPending: isCompletePending } = useMutation({
    mutationFn: completeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: unCompleteTodoFn, isPending: isUnCompletePending } =
    useMutation({
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

  return {
    todos: data || [],
    handleCompleteTodo,
    handleUncompleteTodo,
    isCompletePending,
    isUnCompletePending,
  };
};

export default useTodoList;
