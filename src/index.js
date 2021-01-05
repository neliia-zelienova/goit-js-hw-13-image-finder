import './styles.css';
import '../src/normalize.css';
import 'toastr/build/toastr.min.css';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

import debounce from 'lodash.debounce';

import { render, clearImageList, showLoadMoreButton } from './js/render';
import { getImages } from './js/apiService';
import { overlayHandling } from './js/overlay-handling';

const formRef = document.querySelector('.search-form');
const inputRef = formRef.querySelector('input');

let currImgsPage = 0;

formRef.addEventListener('submit', (event) => event.preventDefault());

inputRef.addEventListener('input',
    debounce(() => {
        if (inputRef.value === '') clearImageList();
        else {
            currImgsPage = 1;
            clearImageList();
            getImages(inputRef.value, currImgsPage).then(data => render(data.hits).then());
        }
    }, 500)
);

// LoadMore Button Handling
const loadMoreBtnRef = document.querySelector('.button');
loadMoreBtnRef.addEventListener('click', () => {
    currImgsPage += 1;
    getImages(inputRef.value, currImgsPage).then(data => render(data.hits)).then(() => {    
        window.scrollTo({
            top: 520 * (currImgsPage + 1),
            behavior: 'smooth'
        });
    });
});

overlayHandling();