import axios from 'axios';

export default function searchAPI(key) {
    return axios({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${key}&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY&maxResults=6`,
    }).catch(err => {
        throw err;
    });
};