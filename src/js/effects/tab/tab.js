import { tabEffect } from './tabEffect.js';
export const tab = () => {
    const category = document.querySelector('.category')
    category.addEventListener('click', tabEffect)
}

