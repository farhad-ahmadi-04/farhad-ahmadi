/**
 * create scrool behavior
 * @param {Element} item element for scrool to
 * @returns scroll to targaet element
 */
export const scroll = (item) => {
    const mobileNav = document.querySelector('.mobile-navbar');
    mobileNav.classList.remove("navbar-show")
    item.scrollIntoView({ behavior: "smooth" })
}