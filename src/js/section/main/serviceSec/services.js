import generateElement from "../../../Assets/generateEle.js";
import label from "../../../components/lable.js";
import render from "../../../Assets/render.js";
import serviceCard from "./serviceCard.js";

/**
 * add components to sevices section:
 * 1= add label component
 * 2= add div to set cards
 * 3= add serviceCard components
 * @param {object} data -data json server
 */
const services = (data) => {
    const serviceSection = document.querySelector('.service--section')
    render(serviceSection, generateElement("div", "container col-primary-container"))
    const serviceContainer = document.querySelector('.service--section>.container')
    console.log(serviceContainer);

    render(serviceContainer, label('Services', 'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam'))

    render(serviceContainer, generateElement('div', 'service-items'))
    const serviceItems = document.querySelector('.service-items');

    data.serviceCard.forEach(item => {
        render(serviceItems, serviceCard(item.src, item.alt, item.title, item.description))
    });

}
export default services