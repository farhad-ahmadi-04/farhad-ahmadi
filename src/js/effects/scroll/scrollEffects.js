import { asyncDelay } from '@/js/Assets/asyncDelay.js'
import { scroll } from '@/js/effects/scroll/scroll.js';
import { navScroll } from "@/js/effects/scroll/navScroll.js";


/**
 * create scroll behavior when user click on hire me button
 * 1st step: call delay function for have time to select btns.
 * 2nd step: selecr all btns
 * 3rd step: select target element to scroll.
 * 4th step: loop im each element to click on
 * 4-1 step: scroll to target element 
 */
export const handelScroll = async () => {

    // 1st:
    await asyncDelay(1000);

    // 2nd:
    const hireMeBtn = document.querySelectorAll('.hireMe--btn')
    // 3th:
    const contactMeSec = document.querySelector(".cantact-me-sec");
    // 4:th
    hireMeBtn.forEach((elem) => {
        elem.addEventListener("click", () => {
            // 4-1:
            scroll(contactMeSec)
        })
    })

    navScroll()
}