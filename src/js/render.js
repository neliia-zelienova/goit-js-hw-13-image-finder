
import renderGallery from "../templates/gallery.hbs";

import toastr from 'toastr';
import options from '../toastr.options';

toastr.options = options;


const hideLoadMoreButton = () => {
    const LoadModeButtonRef = document.querySelector('.load-more');
    LoadModeButtonRef.style.opacity = 0;
    LoadModeButtonRef.style.visibility = 'hidden';
}

export const showLoadMoreButton = () => {
    const LoadModeButtonRef = document.querySelector('.load-more');
    LoadModeButtonRef.style.opacity = 1;
    LoadModeButtonRef.style.visibility = 'visible';
}

export const render = (data) => {
    const containerRef = document.querySelector('.gallery-list');
    containerRef.insertAdjacentHTML('beforeend', renderGallery({ data }));
    if (data.length > 11) showLoadMoreButton();
    else if (data.length === 0) {
        toastr.error('No results found');
    } else hideLoadMoreButton();
};

export const clearImageList = () => {
    const containerRef = document.querySelector('.gallery-list');
    if (containerRef) {
        containerRef.innerHTML = "";
        hideLoadMoreButton();
    }
}

