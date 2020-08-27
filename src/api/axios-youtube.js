import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: '[API_KEY]'
    }
});

export default instance;