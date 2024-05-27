/**
 * create scrool behavior
 * @param {Element} item element for scrool to
 * @returns scroll to targaet element
 */
export const scroll = (item) => item.scrollIntoView({ behavior: "smooth" })