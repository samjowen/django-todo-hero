import axios from 'axios';
import CONFIG from '../../config';
import { Todo } from '../../types/Todo';

const TODO_POSTFIX = 'todos';

const getTodos = async (): Promise<Todo[]> => {
    try {
        const response = await axios.get(`${CONFIG.TODOHERO_API_URL}${TODO_POSTFIX}/`);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }

    return [];
}

export default getTodos;