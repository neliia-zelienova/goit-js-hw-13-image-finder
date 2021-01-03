import axios from 'axios';
import { render } from './render';

axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

const myAPIkey = '19701765-66040315454630f125fe17080';


//https://pixabay.com/api/?image_type=photo&orientation=horizontal
//& q=что_искать & page=номер_страницы & per_page=12 & key=твой_ключ

export const getImages = (searchTerm, pageNumber) => {

    
    const Url = `&q=${searchTerm.replace(' ', '+')}&page=${pageNumber}&per_page=12&key=${myAPIkey}`;
    axios.get(Url).then(data => {
        console.log('in axios', data.data.hits);
        render(data.data.hits);
    });

};