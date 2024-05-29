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
    console.log(clicked);

    // 2nd:
    // const clicked = e.target.closest(".button-tab")
}