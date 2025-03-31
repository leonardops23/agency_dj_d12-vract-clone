import axios from "axios";

const API_URL = 'http://localhost:8000/api';


export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});


export const getPost = async (params = {}) => {
    try {
        const response = await api.get('/posts/', {params});
        return response.data;
    } catch (error) {
        console.error('Error fetching pasts: ', error);
        throw error;
    }
};
