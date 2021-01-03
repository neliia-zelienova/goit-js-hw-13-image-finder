import './styles.css';
import * as debounce from 'lodash.debounce';
import { render } from './js/render';
import { getImages } from './js/apiService';

const formRef = document.querySelector('.search-form');

formRef.addEventListener('submit', (event) => event.preventDefault());

const inputRef = formRef.querySelector('input');

inputRef.addEventListener('input', debounce(() => {
    console.log(inputRef.value);
    getImages(inputRef.value, 2);
    //render();
    }, 500)
);




// const ulRef = document.querySelector('.gallery');

// ulRef.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('click');
// });