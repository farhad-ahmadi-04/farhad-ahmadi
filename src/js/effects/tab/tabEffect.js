export const tabEffect = (e) => {
    // 1st:
    const clicked = e.target.closest(".button-tab")

    // 2nd:
    if (!clicked) return

    // 3rd:
    const tabs = document.querySelectorAll(".button-tab")
    tabs.forEach(tab => tab.classList.remove("primary--text-btn"));

    // 4th:
    clicked.classList.add("primary--text-btn");
    console.log(clicked);
}