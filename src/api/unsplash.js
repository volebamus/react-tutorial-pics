import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JUWbA5wPz35Ep1Dkx0IYp3RC3j2Rf4ACRMjoMaBrTtY'
    }
});