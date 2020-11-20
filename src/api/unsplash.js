import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 8iCJv1y5Zlaej3lutikpZ1twLqnH07yNcjrEEiVMAdo'
    }
});