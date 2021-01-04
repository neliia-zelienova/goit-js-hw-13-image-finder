import * as basicLightbox from 'basiclightbox';

const galleryListRef = document.querySelector('ul');

export const overlayHandling = () => {
    galleryListRef.addEventListener('click', (event) => {
        if (event.target.alt) {
            const content = document.createElement('div');
            const img = document.createElement('img');
            img.src = event.target.alt;
            content.appendChild(img);
            const instance = basicLightbox.create(content, {
                onShow: (instance) => {
                    document.addEventListener('keydown', (event) => {
                        if (event.code === 'Escape') instance.close()
                    });
                }
            });
            galleryListRef.onclick = instance.show(() => console.log('showed'));
        }
    });
}