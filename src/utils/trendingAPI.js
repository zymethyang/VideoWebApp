import axios from 'axios';

export default function callApi(id) {
    return axios({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics,status&chart=mostPopular&regionCode=VN&maxResults=50&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY`,
    }).catch(err => {
        throw err;
    });
};