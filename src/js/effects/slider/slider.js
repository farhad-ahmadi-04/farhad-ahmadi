/**
 * slider handeler 
 * 1st step: sheck animation in user system
 * 2nd steo: call addAnimation function
 * @param {element} scrollers - parent element of items
 * @param {element} scroller - parent element of skills cards
 * @param {element} items - skill cards
 */
export const slider = (scrollers, scroller, items) => {
    // 1st:
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // 2nd:
        addAnimation(scrollers, scroller, items)
    }
}

/**
 * add animation to item
 * 1st step: set attribute to parent cards
 * 2nd step: get cards and loof on them
 * 3rd step: clone cards
 * 4th step: set attribute crads thet cloned
 * 5th step: append them to the oarent
 * @param {element} scrollers - parent element of items
 * @param {element} scroller - parent element of skills cards
 * @param {element} items - skill cards
 */
const addAnimation = (scrollers, scroller, items) => {
    // 1st:
    scrollers.setAttribute("data-animated", true);
    // 2nd:
    items.forEach(element => {
        // 3rd:
        const dublicatedItem = element.cloneNode(true);
        // 4th:
        dublicatedItem.setAttribute("aria-hidden", true);
        // 5th:
        scroller.appendChild(dublicatedItem)
    });
}