import axios from 'axios';


axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

const myAPIkey = '19701765-66040315454630f125fe17080';


export const getImages = (searchTerm, pageNumber) => {

    
    const Url = `&q=${searchTerm.replace(' ', '+')}&page=${pageNumber}&per_page=12&key=${myAPIkey}`;
    return axios.get(Url).then(res => res.data);

};