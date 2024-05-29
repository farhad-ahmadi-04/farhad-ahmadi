import { tabEffect } from './tabEffect.js';
/**
 * select div and when user click on tab tabEffect fynction will call
 */
export const tab = () => {
    const category = document.querySelector('.category')
    category.addEventListener('click', tabEffect)
}

