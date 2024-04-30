// get render

/**
 * we need to get render for our element so it's better to create function for this job: each time we need to do it, just call the render function 
 * @param {Element} ele1 - element that ele2 will added to
 * @param {Element} ele2 - element that add to ele1
 * @returns - HTML element
 */
const render = (ele1, ele2) => ele1.appendChild(ele2);
export default render