import rendrGallery from "../templates/gallery.hbs"

// const ForRender = {
//     renderArray: [
//     {"comments": 78,
//     "downloads": 63296,
//     "favorites": 558,
//     "id": 1508613,
//     "imageHeight": 2135,
//     "imageSize": 1630104,
//     "imageWidth": 2894,
//     "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
//     "likes": 575,
//     "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
//     "previewHeight": 110,
//     "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
//     "previewWidth": 150,
//     "tags": "cat, animal, cat portrait",
//     "type": "photo",
//     "user": "cocoparisienne",
//     "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
//     "user_id": 127419,
//     "views": 127450,
//     "webformatHeight": 472,
//     "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
//     "webformatWidth": 640
// },
// {
//     "comments": 78,
//     "downloads": 63296,
//     "favorites": 558,
//     "id": 1508613,
//     "imageHeight": 2135,
//     "imageSize": 1630104,
//     "imageWidth": 2894,
//     "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
//     "likes": 575,
//     "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
//     "previewHeight": 110,
//     "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
//     "previewWidth": 150,
//     "tags": "cat, animal, cat portrait",
//     "type": "photo",
//     "user": "cocoparisienne",
//     "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
//     "user_id": 127419,
//     "views": 127450,
//     "webformatHeight": 472,
//     "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
//     "webformatWidth": 640
// },
    
// {
//     "comments": 78,
//     "downloads": 63296,
//     "favorites": 558,
//     "id": 1508613,
//     "imageHeight": 2135,
//     "imageSize": 1630104,
//     "imageWidth": 2894,
//     "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
//     "likes": 575,
//     "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
//     "previewHeight": 110,
//     "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
//     "previewWidth": 150,
//     "tags": "cat, animal, cat portrait",
//     "type": "photo",
//     "user": "cocoparisienne",
//     "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
//     "user_id": 127419,
//     "views": 127450,
//     "webformatHeight": 472,
//     "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
//     "webformatWidth": 640
//         },

//         {
//     "comments": 78,
//     "downloads": 63296,
//     "favorites": 558,
//     "id": 1508613,
//     "imageHeight": 2135,
//     "imageSize": 1630104,
//     "imageWidth": 2894,
//     "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
//     "likes": 575,
//     "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
//     "previewHeight": 110,
//     "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
//     "previewWidth": 150,
//     "tags": "cat, animal, cat portrait",
//     "type": "photo",
//     "user": "cocoparisienne",
//     "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
//     "user_id": 127419,
//     "views": 127450,
//     "webformatHeight": 472,
//     "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
//     "webformatWidth": 640
//         },
//         {
//     "comments": 78,
//     "downloads": 63296,
//     "favorites": 558,
//     "id": 1508613,
//     "imageHeight": 2135,
//     "imageSize": 1630104,
//     "imageWidth": 2894,
//     "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
//     "likes": 575,
//     "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
//     "previewHeight": 110,
//     "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
//     "previewWidth": 150,
//     "tags": "cat, animal, cat portrait",
//     "type": "photo",
//     "user": "cocoparisienne",
//     "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
//     "user_id": 127419,
//     "views": 127450,
//     "webformatHeight": 472,
//     "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
//     "webformatWidth": 640
//         },




// ]
// }


//const ForRender = new Object();
//ForRender.renderArray = images;
export const render = (data) => {
    const containerRef = document.querySelector('.gallery-list');
    containerRef.insertAdjacentHTML('beforeend', rendrGallery({ data }));
};


export const clearImageList = () => {
    const containerRef = document.querySelector('.gallery-list');
    if (containerRef) containerRef.innerHTML = "";
}

export const showLoadMoreButton = () => {
    const LoadModeButtonRef = document.querySelector('.load-more');
    LoadModeButtonRef.style.opacity = '1';
}