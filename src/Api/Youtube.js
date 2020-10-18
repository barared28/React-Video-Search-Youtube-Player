import axios from 'axios';
const KEY = 'AIzaSyCpywFUTYwMhNZA5rVJeztZ5XiAsqZaj-o';

export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 20,
        key : KEY
    }
})
