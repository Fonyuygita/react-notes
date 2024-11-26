import axios from 'axios';

const API_URL = 'http://localhost:5000/todos';

export const fetchTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTodo = async (text) => {
    const response = await axios.post(API_URL, { text, completed: false });
    return response.data;
};

export const updateTodo = async (id, text, completed) => {
    const response = await axios.put(`${API_URL}/${id}`, { text, completed });
    return response.data;
};

export const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
