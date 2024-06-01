import { scroll } from "./scroll.js";

/**
 * 5th step: select ul element
 * 5-1: set event hander to ul select
 * 5-2: set condition to target element
 * 5-3: select target id by target link address
 * 5-4: call scroll function
 */
export const navScroll = () => {
    // 5th:
    const listItems = document.querySelectorAll('.list-items')
    listItems.forEach(item => {
        // 5-1:
        item.addEventListener("click", (e) => {
            // 5-2
            const link = e.target.classList.contains('primary--text') ||
                e.target.classList.contains('active')
            if (!link) return
            // 5-3:
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'))
            // 5-4:
            scroll(target)
        })
    })
}