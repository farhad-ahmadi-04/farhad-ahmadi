import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";

const mobileNavGen = (logo) => {
    return domGenerator({
        tag: 'div',
        attributes: { class: 'mobile-navbar' },
        children: [{
            tag: 'div',
            attributes: { class: 'mobile-nav-head' },
            children: [{
                tag: 'h1',
                attributes: { class: 'logo' },
                properties: { textContent: logo }
            }, {
                tag: 'div',
                attributes: { class: 'close-mobile-nav' },
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
export default mobileNavGen