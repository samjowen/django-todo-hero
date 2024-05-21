import axios from 'axios';
import CONFIG from '../../config';

const TODO_POSTFIX = '/todos';

const getTodos = async () => {
    try {
        const response = await axios.get(`${CONFIG.TODOHERO_API_URL}${TODO_POSTFIX}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos', error);
    }
}

export default getTodos;