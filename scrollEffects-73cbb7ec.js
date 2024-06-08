/**
 * A simple function, that simply takes in the amount of milliseconds you wish to wait as a parameter. We then immediately return a new Promise, which is resolved when setTimeout completes.
 * @param {number} time - the time that you wish to wait as a parameter
 * @returns 
 */
const asyncDelay = (time) => new Promise(resolve => {
    setTimeout(resolve, time);
});

/**
 * create scrool behavior
 * @param {Element} item element for scrool to
 * @returns scroll to targaet element
 */
const scroll = (item) => {
    const mobileNav = document.querySelector('.mobile-navbar');
    mobileNav.classList.remove("navbar-show");
    item.scrollIntoView({ behavior: "smooth" });
};

/**
 * 5th step: select ul element
 * 5-1: set event hander to ul select
 * 5-2: set condition to target element
 * 5-3: select target id by target link address
 * 5-4: call scroll function
 */
const navScroll = () => {
    // 5th:
    const listItems = document.querySelectorAll('.list-items') && document.querySelectorAll('.mobile-nav');
    listItems.forEach(item => {
        // 5-1:
        item.addEventListener("click", (e) => {
            // 5-2
            const link = e.target.classList.contains('primary--text') ||
                e.target.classList.contains('active');
            if (!link) return
            // 5-3:
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            // 5-4:
            scroll(target);
        });
    });
};

/**
 * create scroll behavior when user click on hire me button
 * 1st step: call delay function for have time to select btns.
 * 2nd step: selecr all btns
 * 3rd step: select target element to scroll.
 * 4th step: loop im each element to click on
 * 4-1 step: scroll to target element 
 */
const handelScroll = async () => {

    // 1st:
    await asyncDelay(1000);

    // 2nd:
    const hireMeBtn = document.querySelectorAll('.hireMe--btn');
    // 3th:
    const contactMeSec = document.querySelector(".cantact-me-sec");
    // 4:th
    hireMeBtn.forEach((elem) => {
        elem.addEventListener("click", () => {
            // 4-1:
            scroll(contactMeSec);
        });
    });

    navScroll();
};

export { handelScroll };
