import axios from 'axios';

export default function callApi(id) {
    return axios({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY%20&part=snippet,contentDetails,statistics,status`,
    }).catch(err => {
        throw err;
    });
};