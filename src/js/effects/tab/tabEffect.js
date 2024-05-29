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
        const allCrads = document.querySelectorAll('.portfolio-Card')
        allCrads.forEach(tab => tab.classList.remove("portfolio-Card--active"));
        // 3-2:
        allCrads.forEach(tab => tab.classList.add("portfolio-Card--active"));
    } else {

        // 3nd:
        const cards = document.querySelectorAll(`.portfolio-card-${clicked.dataset.id}`)
        // 3-1:
        const allCrads = document.querySelectorAll('.portfolio-Card')
        allCrads.forEach(tab => tab.classList.remove("portfolio-Card--active"));
        // 3-2:
        cards.forEach(tab => tab.classList.add("portfolio-Card--active"));
    }
}