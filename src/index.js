import './styles.css';
import * as debounce from 'lodash.debounce';

import { render, clearImageList } from './js/render';

import { getImages } from './js/apiService';

const formRef = document.querySelector('.search-form');
const inputRef = formRef.querySelector('input');

let currImgsPage = 0;

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    currImgsPage += 1;
    clearImageList();
    getImages(inputRef.value, 1).then(data => render(data.hits));
});


// inputRef.addEventListener('input', debounce(() => {
//     console.log(inputRef.value);
    
//     //render();
//     }, 500)
// );



const loadMoreBtnRef = document.querySelector('.button');

loadMoreBtnRef.addEventListener('click', () => {
    currImgsPage += 1;
    getImages(inputRef.value, currImgsPage).then(data => render(data.hits)).then((data) => {    
        window.scrollTo({
            top: 520 * (currImgsPage + 1),
            behavior: 'smooth'
        });
    });
});