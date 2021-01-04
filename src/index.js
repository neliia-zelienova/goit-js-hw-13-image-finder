import './styles.css';

import '../src/normalize.css';

import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

import * as basicLightbox from 'basiclightbox'

import { render, clearImageList } from './js/render';

import { getImages } from './js/apiService';

const formRef = document.querySelector('.search-form');
const inputRef = formRef.querySelector('input');

let currImgsPage = 0;

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    currImgsPage = 1;
    clearImageList();
    getImages(inputRef.value, currImgsPage).then(data => render(data.hits));
});



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


const aRef = document.querySelector('ul');
aRef.addEventListener('click', (event) => {

    if (event.target.alt) {
        const content = document.createElement('div');

    const img = document.createElement('img');

    img.src = event.target.alt;

        content.appendChild(img);
        
        console.log('content: ', content);



    const instance = basicLightbox.create(content);

    document.querySelector('ul').onclick = instance.show(() => console.log('showed'));
    }
    
});