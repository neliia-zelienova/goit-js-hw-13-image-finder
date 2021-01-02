import './styles.css';
import * as debounce from 'lodash.debounce';
import { render } from './js/render';

const formRef = document.querySelector('.search-form');

formRef.addEventListener('submit', (event) => event.preventDefault());

const inputRef = formRef.querySelector('input');

// inputRef.addEventListener('input', debounce(() => {
    
//     render();
//     }, 500)
// );


render();

const lightBoxAction = (action) => {
    const parentDivRef = document.querySelector('.lightbox');
    if (action === 'open') {
         if (!(parentDivRef.classList.contains('is-open'))) {
            parentDivRef.classList.add('is-open');
        }
    } else if (action === 'close') {
        resetLightBoxImg();
        if (parentDivRef.classList.contains('is-open')) {
            parentDivRef.classList.remove('is-open');
        }
    }
}

const getImageData = (target) => {
    return [target.dataset.source, target.alt];
};

const openImage = (elem) => {
    elem.preventDefault();
    const LightboxRef = document.querySelector('.lightbox');
    if (LightboxRef) {
        lightBoxAction('open');
    }
    currentImageIndex = elem.target.dataset.index;
    updLightBoxImg (...getImageData(elem.target));
}

const openImageByIndex = (index, images) => {
    if (index >= 0 && index < images.length) {
        updLightBoxImg(images[Number(index)].original, images[Number(index)].description);
    }
}

const updLightBoxImg = (src, alt) => {  
    const lightBoxImgRef = document.querySelector('.lightbox__image');
    lightBoxImgRef.src = '';
    lightBoxImgRef.alt = '';
    if (src) lightBoxImgRef.src = src;
    if (alt) lightBoxImgRef.alt = alt;   
}

const resetLightBoxImg = () => {
    updLightBoxImg();
}

const lightBoxHandler = (event) => {
    if (event.target.nodeName === 'BUTTON' || event.target.classList.contains('lightbox__overlay')) { 
        lightBoxAction('close');
    }
}


const ulRef = document.querySelector('.gallery');

ulRef.addEventListener('click', (event) => {
    openImage(event);
    console.log('click');
});