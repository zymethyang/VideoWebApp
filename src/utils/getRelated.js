import axios from 'axios';

export default function getRelated(id) {
    return axios({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=AIzaSyAthUU-wzxrK545NRGetzyw-Kig4EtuQtY&maxResults=50`,
    }).catch(err => {
        throw err;
    });
};