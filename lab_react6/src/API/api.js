import axios from 'axios';

const BASE_URL = 'http://localhost:8080/laptop'; 

export const getAllLaptop = () => {
    return axios.get(`${BASE_URL}`);
};

export const getLaptop = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

export const createLaptop = (laptopData) => {
    return axios.post(`${BASE_URL}, laptopData`);
};

export const updateLaptop = (id, laptopData) => {
    return axios.put(`${BASE_URL}/${id}, laptopData`);
};

export const deleteLaptop = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};  