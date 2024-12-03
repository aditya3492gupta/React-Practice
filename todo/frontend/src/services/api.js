import axios from 'axios';

const API_URL = 'http://localhost:8000/api/todos';

export const getTodos = async () => axios.get(API_URL);
export const addTodo = async (task, description) => axios.post(`${API_URL}/saveTask`, { task, description });
export const updateTodo = async (id, updatedTask) => axios.patch(`${API_URL}/updateTask/${id}`, updatedTask);
export const deleteTodo = async (id) => axios.delete(`${API_URL}/deleteTask/${id}`);
