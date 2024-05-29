/**
 * creatye tab effect:
 * 1st step: finde user click element
 * 1-2 step: condition if user click correct so continue
 * 1-3 step: select all buttons + remove class of active btn
 * 1-4 step: add active class to target btn
 * 2nd step: add condition if user click on all categorie
 * 2-2 step: select all crads + remove active card class
 * 2-3 step: add active class to all cards
 * 3rd step: selct crads by btn data-id
 * 3-2 step: select all crads + remove active card class
 * 3-3 step: add active class to crads that has same class by btn data-id
 * @param {object} e - The event object 
 * @returns - tab effect
 */
export const tabEffect = (e) => {
    // 1st:
    const clicked = e.target.closest(".button-tab")
    // 1-2:
    if (!clicked) return
    // 1-3:
    const tabs = document.querySelectorAll(".button-tab")
    tabs.forEach(tab => tab.classList.remove("primary--text-btn"));
    // 1-4:
    clicked.classList.add("primary--text-btn");

    // 2nd:
    if (clicked.dataset.id === "1") {
        // 2-2:
        const allCrads = document.querySelectorAll('.portfolio-Card')
        allCrads.forEach(tab => tab.classList.remove("portfolio-Card--active"));
        // 2-3:
        allCrads.forEach(tab => tab.classList.add("portfolio-Card--active"));
    } else {

        // 3nd:
        const cards = document.querySelectorAll(`.portfolio-card-${clicked.dataset.id}`)
        // 3-2:
        const allCrads = document.querySelectorAll('.portfolio-Card')
        allCrads.forEach(tab => tab.classList.remove("portfolio-Card--active"));
        // 3-3:
        cards.forEach(tab => tab.classList.add("portfolio-Card--active"));
    }
}