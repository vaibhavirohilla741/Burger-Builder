import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-a1c29-default-rtdb.firebaseio.com/'
});

export default instance;