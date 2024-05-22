import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

const nav = () => {
    return domGenerator({
        tag: 'nav',
        children: [{
            tag: 'ul',
            attributes: { class: 'list-items' },
            children: [{
                tag: 'li',
                attributes: { class: 'list--item' },
                children: [{
                    tag: 'a',
                    properties: { href: '#', textContent: 'Home' },
                    attributes: { class: 'active' }
                }]
            }, {
                tag: 'li',
                attributes: { class: 'list--item' },
                children: [{
                    tag: 'a',
                    properties: { href: '#', textContent: 'Services' },
                    attributes: { class: 'primary--text' }
                }]
            }, {
                tag: 'li',
                attributes: { class: 'list--item' },
                children: [{
                    tag: 'a',
                    properties: { href: '#', textContent: 'About me' },
                    attributes: { class: 'primary--text' }
                }]
            }, {
                tag: 'li',
                attributes: { class: 'list--item' },
                children: [{
                    tag: 'a',
                    properties: { href: '#', textContent: 'Projects' },
                    attributes: { class: 'primary--text' }
                }]
            }, {
                tag: 'li',
                attributes: { class: 'list--item' },
                children: [{
                    tag: 'a',
                    properties: { href: '#', textContent: 'Contact me' },
                    attributes: { class: 'primary--text' }
                }]
            }]
        }]
    })
}

export default nav