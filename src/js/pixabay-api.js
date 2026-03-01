import axios from 'axios';

const keyAPI = "54842065-4aabfdb1463b75fbfdf76b66f";
const urlAPI = "https://pixabay.com/api/";


export function getImagesByQuery(query) {
    return axios.get(urlAPI, {params:{
        "key": keyAPI,
        "q": `${query}`,
        "image_type": "photo",
        "orientation": "horizontal",
        "safesearch": true
        }
    })
    .then(response => response.data.hits);
}
