import axios from 'axios';
import CONFIG from '../../config';
import { Todo } from '../../types/Todo';

const TODO_POSTFIX = 'todos';

interface CreateTodoData {
    title: string;
    task: string;
}

const createTodo = async (todoData: CreateTodoData): Promise<Todo | null> => {
    try {
        const response = await axios.post(`${CONFIG.TODOHERO_API_URL}${TODO_POSTFIX}/`, todoData);
        return response.data;
    } catch (error) {
        if (error instanceof axios.AxiosError) {
            if (error.response?.data) {
                // Have to rethrow errors with React Query
                throw new Error(error.response.request.response);
            }
        }
        return null;
    };
}
export default createTodo;
