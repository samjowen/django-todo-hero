import axios from 'axios';
import CONFIG from '../../config';
import { type Todo } from '../../types/Todo';

const TODO_POSTFIX = '/todos';

const unCompleteTodo = async (id: Todo["id"]): Promise<void> => {
    try {
        const response = await axios.patch(`${CONFIG.TODOHERO_API_URL}${TODO_POSTFIX}/${id}/`, { is_completed: false });
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error uncompleting todo: ', error.message);
        }
    }
}

export default unCompleteTodo;