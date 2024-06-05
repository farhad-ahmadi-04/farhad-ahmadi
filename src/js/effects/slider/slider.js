export const slider = (scrollers) => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        console.log(scrollers);
        addAnimation(scrollers)
    }
}

const addAnimation = (item) => {
    item.setAttribute("data-animated", true);

}