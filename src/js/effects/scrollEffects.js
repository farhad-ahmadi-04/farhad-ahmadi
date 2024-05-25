"use strict";

/**
 * create scroll behavior ehen user click on hire me button
 */
export const handelScroll = () => {
    const contactSec = document.querySelector('.cantact-me-sec')

    Array.from(document.getElementsByClassName("hireMe--btn")).forEach(item => {
        item.addEventListener("click", () => {
            contactSec.scrollIntoView({ behavior: "smooth" })
        })
    }
    );
}