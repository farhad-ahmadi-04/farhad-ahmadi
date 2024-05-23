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
    render(serviceSection, label('Services', 'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam'))

    render(serviceSection, generateElement('div', 'service-items'))
    const serviceItems = document.querySelector('.service-items');

    data.serviceCard.forEach(async item => {
        await render(serviceItems, serviceCard(item.src, item.alt, item.title, item.description))
    });

}
export default services