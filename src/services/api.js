import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getCountries = async () => {
    try {
        const response = await axios.get(`${API_URL}/travel`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
    }
};

//
