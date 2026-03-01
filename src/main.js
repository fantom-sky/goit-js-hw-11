import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery } from './js/render-functions';

import { hideLoader, showLoader } from './js/render-functions';

const form = document.querySelector('.form');
hideLoader();

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const searchQuery = form.elements['search-text'].value.trim();
    if (!searchQuery) {
        return iziToast.warning({
            title: 'Caution',
            message: 'Please enter your query!',
            position: 'topRight',
            timeout: 7000,
        });
    }

    clearGallery();

    showLoader();
    userQueryProcessing(searchQuery);
}


function userQueryProcessing(query){
    getImagesByQuery(query)
    .then(responseHits => {
        if (responseHits.length > 0) {
            createGallery(responseHits);           
        } else {
            iziToast.info({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                timeout: 7000,
            });
        }
    })
    .catch(() => {
        iziToast.error({
            message: 'Something went wrong! Please try new query!',
            position: 'center',
            timeout: 7000,
        });
    })
    .finally(() => {
        form.reset();
        hideLoader();
    })   
}


