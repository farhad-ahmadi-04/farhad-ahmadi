// get render

/**
 * we need to get render for our element so it's better to create function for this job: each time we need to do it, just call the render function 
 * @param {Element} ele1 - element that ele2 will added to
 * @param {Element} ele2 - element that add to ele1
 * @returns - HTML element
 */
const render = (ele1, ele2) => ele1.appendChild(ele2);

const liList = [
    {
        item: "home",
        link: "#hero-section",
        class: "active"
    }, {
        item: "Services",
        link: "#service-section",
        class: "primary--text"
    }, {
        item: "About me",
        link: "#aboutMe-section",
        class: "primary--text"
    }, {
        item: "Portfolio",
        link: "#portfolio-section",
        class: "primary--text"
    }, {
        item: "Contact me",
        link: "#cantactMe-section",
        class: "primary--text"
    }
];
const footerLiList = [
    {
        item: "home",
        link: "#hero-section",
        class: "primary--text"
    }, {
        item: "Services",
        link: "#service-section",
        class: "primary--text"
    }, {
        item: "About me",
        link: "#aboutMe-section",
        class: "primary--text"
    }, {
        item: "Portfolio",
        link: "#portfolio-section",
        class: "primary--text"
    }, {
        item: "Contact me",
        link: "#cantactMe-section",
        class: "primary--text"
    }
];

const p = (e) => {
  const { tag: i, attributes: n, dataAttributes: o, properties: s, eventListeners: r } = e, c = i instanceof HTMLElement;
  if (!c && !(typeof i == "string"))
    throw new Error("Please provide a string tag or a DOM element");
  const a = c ? i : document.createElement(i);
  if (n instanceof Object)
    for (const t in n)
      a.setAttribute(t, n[t]);
  else
    n && console.warn("Skipping 'attributes' since it is not an object.");
  if (o instanceof Object)
    for (const t in o)
      a.dataset[t] = o[t];
  else
    o && console.warn("Skipping 'dataAttributes' since it is not an object.");
  if (s instanceof Object)
    for (const t in s)
      a[t] = s[t];
  else
    s && console.warn("Skipping 'properties' since it is not an object.");
  if (r instanceof Object)
    for (const t in r) {
      const f = r[t];
      if (typeof f != "function") {
        console.warn(`Skipping '${t}' handler, since it is not a function.`);
        continue;
      }
      a.addEventListener(t, f);
    }
  else
    r && console.warn("Skipping 'eventListeners' since it is not an object.");
  return a;
}, l = ({ children: e, ...i }) => {
  const n = p(i);
  if (e instanceof Object) {
    Array.isArray(e) || (e = [e]);
    for (const o of e) {
      const s = l(o);
      n.append(s);
    }
  }
  return n;
};

// create header by dom-generator
const headerGen = () => {
    return l({
        tag: "header",
        children: [{
            tag: "div",
            attributes: { class: "container" },
            children: [{
                tag: "div",
                attributes: { class: "menu--item menu-logo" },
                children: [
                    {
                        tag: "span",
                        attributes: { class: "logo" },
                        properties: { textContent: "feri" },
                    }, {
                        tag: "button",
                        attributes: { class: 'hamberger-menu' },
                        children: [{
                            tag: "span",
                            attributes: { class: "menu--icon top-icon" }
                        }, {
                            tag: "span",
                            attributes: { class: "menu--icon middle-icon" }
                        }, {
                            tag: "span",
                            attributes: { class: "menu--icon bttom-icon" }
                        }]
                    }
                ]
            }, {
                tag: "nav",
                attributes: { class: "menu--item menu-nav" },
            }, {
                tag: "div",
                attributes: { class: "menu--item menu-btn" },
            }]
        }]
    })
};

/**
 * 1st step: create ul element with
 * 2nd step: loop on array & get render of liList
 * 3rd step: return ul element
 * @param {obj} obj  objects that has data of ul li elements
 * @returns ul element
 */
const ul = (obj, cla) => {
    // 1st:
    const ulList = l({
        tag: 'ul',
        attributes: { class: cla },
    });
    // 2nd:
    obj.map(items => render(ulList, liItem(items.item, items.link, items.class)));
    // 3rd:
    return ulList
};


/**
 * create li element
 * @param {string} item - textContent
 * @param {string} link - link address
 * @param {string} cla - class name
 * @returns li element
 */
const liItem = (item, link, cla) => {
    return l({
        tag: 'li',
        attributes: { class: 'list--item' },
        children: [{
            tag: 'a',
            properties: { href: link, textContent: item },
            attributes: { class: cla }
        }]
    })
};

/**
 * create text button component to use everywhere
 * @param {string} text - value of textBtn
 * @param {string} claBtn - style of btn
 * @returns - html element (button)
 */
const textBtn = (text, claBtn, id = undefined) => {
    return l({
        tag: 'button',
        attributes: { class: claBtn },
        properties: { textContent: text },
        dataAttributes: { id: id },
    })
};

const mobileNavGen = (logo) => {
    return l({
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
};

/**
 * create mobile navbar
 * 1st: get render for stracture
 * 2nd: select nav & get render from ul list
 * 3nd: select hire me div & get render from text btn
 * 4th step: slect navbar + btn for show vav & btn for close nav
 * 5th step: condition for show navbar
 * 6th step: condition for hide navbar
 * @param {Element} pos - element for appending to
 */
const mobileNavbar = (pos) => {
    // 1st:
    render(pos, mobileNavGen('feri'));

    // 2nd:
    const mobileNav = document.querySelector('.mobile-nav');
    render(mobileNav, ul(liList, 'mobile-list-items'));

    // 3rd:
    const hireMeBtn = document.querySelector('.hire-me');
    render(hireMeBtn, textBtn('Hire me', 'primary--text-btn hireMe--btn'));

    // 4th:
    const navMenu = document.querySelector('.mobile-navbar'),
        navToggle = document.querySelector('.hamberger-menu'),
        navClose = document.querySelector('.close-mobile-nav');

    // 5th:
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('navbar-show');
        });
    }
    // 6th:
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('navbar-show');
        });
    }
};

/**
 * create header by using component
 * 1st step: get render from headerGen (stractur of header).
 * 2nd step:select menu nav div & get render from nav.
 * 3nd step:get render from mobile navbar.
 * 4th step:select menu btn div & get render from text btn
 * @param {Element} pos position for append to
 */
const header = (pos) => {
    // 1st:
    render(pos, headerGen());

    // 2rd:
    const navDiv = document.querySelector(".menu-nav");
    render(navDiv, ul(liList, "list-items"));

    // 3nd:
    mobileNavbar(pos);


    // 4th:
    const menuBtnDiv = document.querySelector(".menu-btn");
    render(menuBtnDiv, textBtn("Hite me", "primary--text-btn hireMe--btn"));
};

/**
 * to get data from json file - json file return json format 'cause of this we use json() method to parse json it to object
 * @param {String} url - address of file
 * @returns data - data is object
 */
const fetchData = async (url) => await (await fetch(url)).json();

/**
 * create html element (must of the time use for create sections)
 * @param {string} ele - element name
 * @param {string} cla - class name
 * @param {string} text - text for element
 * @returns html element
 */
const generateElement = (ele, cla, text, idEle = undefined) => {

    return l({
        tag: ele,
        attributes: { class: cla, id: idEle },
        properties: { textContent: text }
    })
};

/**
 * this component will use as a title of section
 * @param {string} label - title of template
 * @param {string} text - text of template
 * @returns html element
 */
const label = (label, text) => {
    return l({
        tag: 'div',
        attributes: { class: 'lable-item' },
        children: [{
            tag: 'h1',
            attributes: { class: 'head-lable title--text' },
            properties: { textContent: label }
        }, {
            tag: 'p',
            attributes: { class: 'primary--text' },
            properties: { textContent: text }
        }]
    })
};

/**
 * create service card 
 * @param {string} img - src of image
 * @param {string} alt - alt of image
 * @param {string} title - title of card
 * @param {string} text - text of card
 * @returns html element => services card
 */
const serviceCard = (img, alt, title, text) => {
    return l({
        tag: 'div',
        attributes: { class: 'service-card' },
        children: [{
            tag: 'div',
            attributes: { class: 'service-head' },
            children: [{
                tag: 'img',
                attributes: { class: 'head-img' },
                properties: { src: img, alt: alt }
            }, {
                tag: "h5",
                attributes: { class: 'head-title' },
                properties: { textContent: title }
            }]
        }, {
            tag: "div",
            attributes: { class: 'service-body' },
            children: [{
                tag: "p",
                attributes: { class: 'body-text primary--text' },
                properties: { textContent: text }
            }]
        }]
    })
};

/**
 * add components to sevices section:
 * 1= add label component
 * 2= add div to set cards
 * 3= add serviceCard components
 * @param {object} data -data json server
 */
const services = (data) => {
    const serviceSection = document.querySelector('.service--section');
    render(serviceSection, generateElement("div", "container col-primary-container"));
    const serviceContainer = document.querySelector('.service--section>.container');

    render(serviceContainer, label('Services', 'The Best Services for Your Satisfaction'));

    render(serviceContainer, generateElement('div', 'service-items'));
    const serviceItems = document.querySelector('.service-items');

    data.serviceCard.forEach(item => {
        render(serviceItems, serviceCard(item.src, item.alt, item.title, item.description));
    });

};

/**
 * this function is for download files
 * @param {Element} tag - a tag
 * @param {string} url - url of a tag
 * @param {string} name - name of file to download
 */
const downloadURI = (url, name) => {
    const tag = document.createElement('a');
    tag.download = name;
    tag.href = url;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
};

/**
 * create component of icon btn to use everywhere we want
 * @param {string} image - icon of btn
 * @param {string} alt - alt value for image
 * @param {string} url - url of social media
 * @param {string} url - style of btn
 * @returns html element
 */
const iconBtn = (image, alt, url, cla) => {
    return l({
        tag: "a",
        attributes: { class: cla, href: url },
        children: [{
            tag: 'button',
            children: [{
                tag: "img",
                attributes: { class: "icon-btn-image" },
                properties: { src: image, alt: alt }
            }]
        }]
    })
};

/**
 * create my image componenet
 * @param {string} image - src of image
 * @param {String} alt - alt of image
 * @param {String} imgBg - imgBg is key world for set style
 * @returns html element
 */
const mainImage = (data, imgBg) => {
    return l({
        tag: "div",
        attributes: { class: "main-image" },
        children: [{
            tag: "div",
            attributes: { class: `${imgBg}-cercle-bg` },
            children: [{
                tag: "img",
                attributes: { class: "hero-img" },
                properties: { src: data.img, alt: data.alt }
            }],
        }]
    })
};

const heroItem = (data) => {
    return l(
        {
            tag: "div",
            attributes: { class: "container row-primary-container" },
            children: [{
                tag: "div",
                attributes: { class: "hero-item" },
                children: [{
                    tag: "div",
                    attributes: { class: "interview" },
                    children: [{
                        tag: "div",
                        attributes: { class: "hero-interview" },
                        children: [
                            {
                                tag: "p",
                                attributes: { class: "primary--text" },
                                properties: { textContent: "Hi I am" }
                            }, {
                                tag: "h3",
                                attributes: { class: "hero-name" },
                                properties: { textContent: data.about.own },
                            }
                        ],
                    }, {
                        tag: "h1",
                        attributes: { class: "hero-skill" },
                        properties: { textContent: data.about.skill },
                    }, {
                        tag: "div",
                        attributes: { class: "hero-media" },
                    },
                    ]
                }, {
                    tag: "div",
                    attributes: { class: "hero-action" },
                    children: [{
                        tag: textBtn("Hire me", "primary--text-btn hireMe--btn"),
                    }, {
                        tag: textBtn("Download CV", "outline-primary--text-btn download-resume")
                    }],
                }, {
                    tag: "div",
                    attributes: { class: "hero-experience" },
                    children: [{
                        tag: 'div',
                        attributes: { class: "Experiences" },
                        children: [{
                            tag: "p",
                            attributes: { class: "Experiences-num" },
                            properties: { textContent: "2+" }
                        }, {
                            tag: "p",
                            attributes: { class: "Experiences-text" },
                            properties: { textContent: "Experiences" }
                        }]
                    }, {
                        tag: 'div',
                        attributes: { class: "Experiences" },
                        children: [{
                            tag: "p",
                            attributes: { class: "Experiences-num" },
                            properties: { textContent: "10+" }
                        }, {
                            tag: "p",
                            attributes: { class: "Experiences-text" },
                            properties: { textContent: "Project done" }
                        }]
                    }, {
                        tag: 'div',
                        attributes: { class: "Experiences" },
                        children: [{
                            tag: "p",
                            attributes: { class: "Experiences-num" },
                            properties: { textContent: "10+" }
                        }, {
                            tag: "p",
                            attributes: { class: "Experiences-text" },
                            properties: { textContent: "Happy Clients" }
                        }]
                    }]
                }],
            }]
        }
    )
};

/**
 * getting render of hero section components:
 * 1= get render hero item.
 * 2= set icon btn in hero item.
 * 3= get render from main image in hero section.
 * @param {object} data - data json server
 * @param {object} position - object of elements
 */
const hero = (data) => {
    const heroSection = document.querySelector('.hero-section');
    // hero: get render hero item---
    render(heroSection, heroItem(data));
    // ---set icon btn in hero item
    const heroMedia = document.querySelector('.hero-media');
    data.socialMedia.forEach(item => {
        render(heroMedia, iconBtn(item.icon, item.alt, item.address, "icon-btn"));
    });
    // ---get render from main image in hero section.
    const heroSecContainer = heroSection.querySelector(".container");
    render(heroSecContainer, mainImage(data.about, "max"));

    const downloalBtn = document.querySelector(".download-resume");
    downloalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        downloadURI(data.about.resume, "Farhad-Ahmadi-resume.pdf");
    });
};

const MyIntroduction = (text) => {
    return l({
        tag: "p",
        properties: { textContent: text },
        attributes: { class: "primary--text" }
    })
};

/**
 * create textIcon btn by dom generator and set value dynamically
 * @param {string} url - address of btn
 * @param {string} image - image of btn that get from json server
 * @param {string} alt - alt of image
 * @param {string} text - text of btn
 * @param {string} cla - style of btn
 * @returns bottun element (text icon btn)
 */
const textIconBtn = (image, alt, text, cla) => {
    return l({
        tag: 'button',
        attributes: { class: cla },
        children: [{
            tag: "img",
            attributes: { class: "icon-btn-image" },
            properties: { src: image, alt: alt }
        }, {
            tag: "span",
            properties: { textContent: text }
        }]
    })
};

/**
 * create skill card component with dom generator 
 * @param {object} data - data of crad(image, alt, texts) from json
 * @returns html element
 */
const skillCard = (data) => {
    return l({
        tag: "div",
        attributes: { class: "skillCard" },
        children: [{
            tag: "div",
            attributes: { class: "progress" },
            children: [{
                tag: "div",
                attributes: { class: "progress-bar" },
                children: [{
                    tag: "img",
                    attributes: { class: "skill-icon" },
                    properties: { src: data.img, alt: data.alt },
                }]
            }]
        }, {
            tag: "div",
            attributes: { class: "skill" },
            children: [{
                tag: "span",
                attributes: { class: "progress-range" },
                properties: { textContent: `${data.avrage}%` }
            }, {
                tag: "span",
                attributes: { class: "skill-item primary--text" },
                properties: { textContent: data.tool }
            }]
        }]
    })
};

/**
 * slider handeler 
 * 1st step: sheck animation in user system
 * 2nd steo: call addAnimation function
 * @param {element} scrollers - parent element of items
 * @param {element} scroller - parent element of skills cards
 * @param {element} items - skill cards
 */
const slider = (scrollers, scroller, items) => {
    // 1st:
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // 2nd:
        addAnimation(scrollers, scroller, items);
    }
};

/**
 * add animation to item
 * 1st step: set attribute to parent cards
 * 2nd step: get cards and loof on them
 * 3rd step: clone cards
 * 4th step: set attribute crads thet cloned
 * 5th step: append them to the oarent
 * @param {element} scrollers - parent element of items
 * @param {element} scroller - parent element of skills cards
 * @param {element} items - skill cards
 */
const addAnimation = (scrollers, scroller, items) => {
    // 1st:
    scrollers.setAttribute("data-animated", true);
    // 2nd:
    items.forEach(element => {
        // 3rd:
        const dublicatedItem = element.cloneNode(true);
        // 4th:
        dublicatedItem.setAttribute("aria-hidden", true);
        // 5th:
        scroller.appendChild(dublicatedItem);
    });
};

/**
 * create skill cards:
 * 1st step: get render from element & select it.
 * 2nd step: create div of skills & select it.
 * 3rd step: create card by map method & get render from them.
 * 4th step: select cards.
 * 5th step: call slider modules
 * @param {Element} item - element to appending to
 * @param {object} data - data of each cards
 */
const sliderAbout = (item, data) => {
    // 1st:
    render(item, generateElement("div", "scroller"));
    const scroller = document.querySelector('.scroller');

    // 2nd:
    render(scroller, generateElement("div", "scroller-inner"));
    const scrollerInner = document.querySelector('.scroller-inner');

    // 3rd: 
    data.skill.map(item => render(scrollerInner, skillCard(item)));

    // 4th:
    const skillsCards = Array.from(scrollerInner.children);

    // 5th:
    slider(scroller, scrollerInner, skillsCards);
};

/**
 * create about me section by get render from components
 * 1st step: select section + add label.
 * 2nd step: craete div for push (image + paragraph) & skills item.
 * 3rd step: create div for item (image & paragraph + btn).
 * 4th step: select item & getting render from main image.
 * 5th step: create div for paragraph & btn + selectr div + set text data to div.
 * 6th step: call sliderAbout component.
 * @param {object} data - data of json file
 */
const aboutMe = (data) => {
    // 1st:
    const aboutMeSec = document.querySelector('.about-me-sec');
    render(aboutMeSec, generateElement("div", "container col-primary-container"));

    const aboutMeContainer = document.querySelector('.about-me-sec>.container');
    render(aboutMeContainer, label("About me", "front end developer and also UI/UX designer"));

    // 2nd:
    render(aboutMeContainer, generateElement("div", "about-me-item col-primary-container"));
    const aboutMeItem = document.querySelector('.about-me-item');

    // 3rd:
    render(aboutMeItem, generateElement("div", "about-me-sec-item row-primary-container"));

    // 4th:
    const aboutMeSecItem = document.querySelector('.about-me-sec-item');
    render(aboutMeSecItem, mainImage(data.about, "min"));

    // 5th:
    render(aboutMeSecItem, generateElement("div", "introduction-item col-primary-container "));
    const introductionItem = document.querySelector('.introduction-item');
    render(introductionItem, MyIntroduction(data.about.aboutMe));
    render(introductionItem, textIconBtn(data.icon.textIcon, "download icon", "Download CV", "primary--textIcon-btn"));

    // 6th:
    sliderAbout(aboutMeItem, data);

};

/**
 * create card component with dom generator
 * @param {object} data - data for create card
 * @returns html element(card)
 */
const portfolioCard = (category, data, icon) => {
    return l({
        tag: 'div',
        attributes: { class: `portfolio-Card portfolio-card-${category.id} portfolio-Card--active` },
        children: [{
            tag: 'img',
            attributes: { class: "portfolio-Card-image" },
            properties: { src: data.img, alt: data.alt },
        }, {
            tag: 'div',
            attributes: { class: "portfolio-body" },
            children: [{
                tag: 'div',
                attributes: { class: "portfolio-body-label" },
                children: [{
                    tag: 'a',
                    attributes: { class: "portfolio-name primary--text" },
                    properties: { textContent: data.name, href: data.repository },
                }, {
                    tag: 'span',
                    attributes: { class: "portfolio-category primary--text" },
                    properties: { textContent: category.name },
                }]
            }, {
                tag: 'p',
                attributes: { class: "portfolio-body-description primary--text" },
                properties: { textContent: data.description },
            }, {
                tag: 'a',
                properties: { href: data.sourceCode },
                children: [{
                    tag: textIconBtn(icon.arrowRight, "Arrow-Right", "source code", "secondary--textIcon-btn")
                }]
            }]
        }]
    })
};

/**
 * create label for portfolio 
 * @param {string} label - text of label
 * @returns html element
 */
const portfolioLabel = (label) => {
    return l({
        tag: 'div',
        attributes: { class: 'lable-item portfolio-label' },
        children: [{
            tag: 'h1',
            attributes: { class: 'head-lable title--text' },
            properties: { textContent: label }
        }, {
            tag: 'div',
            attributes: { class: 'category' },
        }]
    })
};

// import textBtn from "../../textBtn.js";

let showCardsStep = 0;
let showCards = 6;

/**
 * create portfoliosection and add component to the section:
 * 1st: get render from label 
 * 2nd: find categories from object and push it to array
 * 3rd: get render from categories by map method
 * 4th: create div for cards & select it
 * 5th: get data of cards
 * 6th: create empty array for cards = combined
 * 7th: loop on cards & destracture data of cards
 * 8th: push object by cards data to combined (empty array)
 * 9th: sort on combined and set it in 'shuffled' variable
 * 10th: call cardRender array function and pass datas
 * 11th: create div by 'more-card' classNamein portfolio-section for more btn & select it
 * 12th: get render from textBtn component in '.more-card' div & select btn(more)
 * 13th: set addEventListener on more btn(when user click on btn callBack cardRender array function )
 * @param {object} data data from json file
 */
const portfolio = (data) => {
    // 1st step: 
    const portfolioSec = document.querySelector(".portfolio-sec");
    render(portfolioSec, generateElement("div", "container col-primary-container"));

    const portfolioContainer = document.querySelector(".portfolio-sec>.container");
    render(portfolioContainer, portfolioLabel("Portfolio"));
    const category = document.querySelector(".category");

    // 2nd step:
    const uniqueCategory = Object.keys(data.portfolio);

    // 3rd step:
    render(category, textBtn("All", "secondary--text-btn primary--text-btn button-tab", 1));
    uniqueCategory.map((item, index) => render(category, textBtn(item, "secondary--text-btn button-tab", index + 2)));

    // 4th step:
    render(portfolioContainer, generateElement('div', "prtfolio-card-sec", undefined));
    const cardDiv = document.querySelector('.prtfolio-card-sec');

    // 5th step:
    const cardData = Object.entries(data.portfolio);
    // 6th step:
    const combined = [];

    // 7th step:
    let i = 2;
    for (const [category, project] of cardData) {
        project.map(item => {
            // 8th step:
            combined.push({
                category: {
                    name: category,
                    id: i
                }, item
            });
        });
        i += 1;
    }
    // 9th step:
    const shuffled = combined.sort(() => 0.5 - Math.random());

    // 10th step:
    cardRender(shuffled, cardDiv, data.icon, showCardsStep, showCards);

    // 11th step:
    render(portfolioSec, generateElement('div', "more-div", undefined));
    const moreDiv = document.querySelector('.more-div');

    // 12th step:
    render(moreDiv, textBtn("More", "more-card outline-primary--text-btn"));
    const more = document.querySelector('.more-card');

    // 13th step:
    more.addEventListener('click', () => {
        cardRender(shuffled, cardDiv, data.icon, showCardsStep += 6, showCards += 3);
    });
};

/**
 * in project we can not show all of obj so , We should show only some of thet that by slice method and steps that we pass it, we do ot.
 * and then we get render, We pass position and element that create it by portfolioCard component.
 * @param {Array} cards - array of obj that project is in
 * @param {Element} pos - position for appending
 * @param {string} icon - src og image for textIconBtn
 * @param {number} showCardsStep - step of obj in array for find it to show it
 * @param {number} showCards - last step of obj in array for find it to show it
 */
const cardRender = (cards, pos, icon, showCardsStep, showCards) => {
    cards.slice(showCardsStep, showCards).map(({ category, item }) => {
        render(pos, portfolioCard(category, item, icon));
    });
};

const contactForm = () => {
    return l({
        tag: 'form',
        attributes: { id: 'contact-form' },
        children: [{
            tag: 'div',
            attributes: { class: "inputs" }
        }, {
            tag: 'div',
            attributes: { class: "submit-div" },
            children: [{
                tag: 'input',
                attributes: { class: "outline-primary--text-btn" },
                properties: { value: "Send", type: "submit" },
            }]
        }]
    })
};

/**
 * create input component
 * @param {string} type - type of input 
 * @param {string} nameInput - name of input
 * @param {string} placeholder - placeholder of input
 * @param {string} cla - className of input
 * @returns html element
 */
const inputCom = (ele, type, nameInput, placeholder, cla) => {
    return l({
        tag: "div",
        attributes: { class: "input-item" },
        children: [{
            tag: ele,
            attributes: { class: cla },
            properties: { type: type, name: nameInput, placeholder: placeholder }
        }, {
            tag: "small",
            attributes: { class: "error-message" }
        }]
    })
};

/**
 * function is for create textarea but not just it we can use it for another things too.
 * @param {string} ele - target element to create
 * @param {string} placeholder - placeholder of input
 * @param {string} cla - className 
 * @returns html element
 */
const textareaCom = (ele, placeholder, cla) => {
    return l({
        tag: "div",
        attributes: { class: "input-item" },
        children: [{
            tag: ele,
            attributes: { class: cla },
            properties: { placeholder: placeholder }
        }, {
            tag: "small",
            attributes: { class: "error-message" }
        }]
    })
};

/**
 * create contact me section with all nessesaries components:
 * 1st: selct section & get render of label
 * 2nd: get render form form & select it
 * 3rd: get render from inputs
 */
const cantactMe = () => {
    // 1st step:
    const cantactSec = document.querySelector('.cantact-me-sec');
    render(cantactSec, generateElement("div", "container col-primary-container"));

    const contactContainer = document.querySelector('.cantact-me-sec>.container');
    render(contactContainer, label("Contact Me", "Cultivating Connections: Reach Out and Connect with Me"));
    // 2nd dtep :
    render(contactContainer, contactForm());
    const inputForm = document.querySelector(".inputs");
    // 3th step:
    render(inputForm, inputCom("input", "text", "user-name", "Name", "input-tag user-name"));
    render(inputForm, inputCom("input", "email", "user-email", "Email", "input-tag user-email"));
    render(inputForm, inputCom("input", "number", "user-phone", "Phone number", "input-tag user-phone"));
    render(inputForm, textareaCom("textarea", "Message", "input-tag user-message"));

};

/**
 * 1st step: create main element
 * 2nd step: get render from sections
 * 3rd step: fetch data from json file
 * 4th step: get render form main in direction
 * @param {Element} app direction for appending to
 */
const loadMain = (app) => {
    // create element
    const main = l({
        tag: 'main',
    });

    sectionsRender(main);

    //featch data
    const obj = fetchData("src/js/Assets/data.json");
    // if featching is seccess, so call this function
    obj.then(data => {
        // call function for push data
        sectionData(data);
    })
        // if not,so call this
        .catch(err => { console.log(err); });

    render(app, main);
};

/**
 * get render from section when page loaded
*/
const sectionsRender = (item) => {
    // get renderf of hero section
    render(item, generateElement('section', 'landin-section hero-section', undefined, "hero-section"));
    render(item, generateElement('section', 'landin-section service--section', undefined, "service-section"));
    render(item, generateElement('section', 'landin-section about-me-sec', undefined, "aboutMe-section"));
    render(item, generateElement('section', 'landin-section portfolio-sec', undefined, "portfolio-section"));
    render(item, generateElement('section', 'landin-section cantact-me-sec', undefined, "cantactMe-section"));
};





/**
 * set component of sections => set data to component and then send it to sections.
 * @param {object} data - data fron json server
*/
const sectionData = (data) => {
    // hero components
    hero(data);

    // service components:
    services(data);

    // about components:
    aboutMe(data);

    // portfolio components:
    portfolio(data);

    // contact me components:
    cantactMe();
};

/**
 * loop on array from json file to get render from each item
 * @param {Array} media - all social media
 * @param {Element} pos - html element
 */
const mediaFooter = (media, pos) => {
    media.map(item => render(pos, iconBtn(item.icon, item.alt, item.address, "icon-btn")));
};

/**
 * create component of contact:
 * 1st step: destruction data.
 * 2nd step: get render from textIcon btn by datas
 * function for get render from contact footer component
 * @param {object} about - about object that I want just email & phone number
 * @param {object} icon - icons of project 
 * @param {Element} pos - element for get render
 */
const contactFooterCom = (about, icon, pos) => {
    // 1st:
    const { email, phone } = about;
    const { email: emailIcon, phone: phoneIcon } = icon;

    // 2nd:
    render(pos, textIconBtn(emailIcon, "email address", email, "secondary-simple--textIcon-btn"));
    render(pos, textIconBtn(phoneIcon, "phone number", phone, "secondary-simple--textIcon-btn"));

};

/**
 * create footer stracture
 * @param {string} logo - logo of site(It's text) 
 * @returns html elemnt
 */
const footerGen = (logo) => {
    return l({
        tag: "footer",
        children: [{
            tag: "div",
            attributes: { class: "container" },
            children: [{
                tag: "div",
                attributes: { class: 'footer-item logo-footer logo' },
                properties: { textContent: logo }
            }, {
                tag: "nav",
                attributes: { class: "footer-item nav-footer" },
            }, {
                tag: "div",
                attributes: { class: "footer-item media-footer" }
            }, {
                tag: "div",
                attributes: { class: "footer-item contact-footer" }
            }]
        }]


    })
};

// get data from json file
const obj = fetchData("src/js/Assets/data.json");


/**
 * send components to footer:
 * 1st: generate assets stracture of footer
 * 2nd: select nav div & getrender from navi in footer
 * 3rd: select media div & get data from json and loop on that then pass it to media function.
 * 4th: select contact-footer div & grt rendr from data to this div...:)
 * @param {HTMLElement} app - html element to get render 
 */
const footer = (app) => {
    // 1st step:
    render(app, footerGen("feri"));

    // 2nd step:
    const navigation = document.querySelector(".nav-footer");
    render(navigation, ul(footerLiList, "list-items"));

    // 3nd & 4th :step:
    const mediaFooterDiv = document.querySelector(".media-footer");
    const contactFooterDiv = document.querySelector('.contact-footer');
    obj.then(data => {
        // 3:
        mediaFooter(data.socialMedia, mediaFooterDiv);
        // 4:
        contactFooterCom(data.about, data.icon, contactFooterDiv);
    }).
        catch(err => console.error(err));
};

// main js file

const app = document.querySelector('.app');

// get render from sectins & effects
const initialize = async () => {
    header(app);
    await loadMain(app);
    footer(app);
    const cursorModuls = await import('./cursor-b7a618ae.js');
    const scrollModuls = await import('./scrollEffects-73cbb7ec.js');
    const tabModuls = await import('./tab-7af18f2c.js');
    const sendEmail = await import('./sendEmail-f4f9b967.js');
    cursorModuls.cursor(app);
    scrollModuls.handelScroll();
    tabModuls.tab();
    sendEmail.emailHandeler();
};
initialize();

export { generateElement as g, render as r };
