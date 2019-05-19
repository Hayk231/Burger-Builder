import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-order-a2bb4.firebaseio.com/'
});

export default instance;