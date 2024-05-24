import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";

const mobileNav = (logo) => {
    return domGenerator({
        tag: 'div',
        attributes: { class: 'mobile-nav' },
        children: [{
            tag: 'div',
            attributes: { class: 'mobile-nav-head' },
            children: [{
                tag: 'h1',
                attributes: { class: 'logo' },
                properties: { textContent: logo }
            }, {
                tag: 'div',
                attributes: { class: 'colse-mobile-nav' },
                children: [{
                    tag: 'span',
                    attributes: { class: 'line btn-top-line' }
                }, {
                    tag: 'span',
                    attributes: { class: 'line btn-bottom-line' }
                }]
            }]
        }, {
            tag: 'nav',
            attributes: { class: 'mobile-nav' }
        }, {
            tag: 'div',
            attributes: { class: 'hire-me' },
        }]
    })
}
export default mobileNav