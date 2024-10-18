import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);
    return response.data;
  } catch (error) {
    console.log(error)
    return null;
  }
};

export const createItem = async (payload) => {
  try {
    const response = await axios.post(`${API_URL}/items`, payload);
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error('Error en el registro');
  }
};

export const updateItem = async (payload) => {
  try {
    const response = await axios.put(`${API_URL}/items/${payload._id}`, {
        name: payload.name,
        description: payload.description,

    });
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error('Error al crear el registro');
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error('Error al obtener los registros');
  }
};