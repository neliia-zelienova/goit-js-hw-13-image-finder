import './styles.css';
import * as debounce from 'lodash.debounce';
import { render } from './js/render';

const formRef = document.querySelector('.search-form');

formRef.addEventListener('submit', (event) => event.preventDefault());

const inputRef = formRef.querySelector('input');

inputRef.addEventListener('input', debounce(() => {
    console.log(inputRef.value);
    render();
    }, 500)
);