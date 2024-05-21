import axios from 'axios';
import CONFIG from '../../config';
import { type Todo } from '../../types/Todo';

const TODO_POSTFIX = '/todos';

const completeTodo = async (id: Todo["id"]): Promise<void> => {
    try {
        const response = await axios.patch(`${CONFIG.TODOHERO_API_URL}${TODO_POSTFIX}/${id}/`, { is_completed: true });
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching todos', error.message);
        }
    }
}

export default completeTodo;