export const slider = (scrollers) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation(scrollers)
    }
}

const addAnimation = (item) => {
    item.setAttribute("data-animated", true);
}