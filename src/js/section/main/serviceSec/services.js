import generateElement from "@/js/Assets/generateEle.js";
import label from "@/js/components/lable.js";
import render from "@/js/Assets/render.js";
import serviceCard from "@/js/section/main/serviceSec/serviceCard.js";

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

    render(serviceContainer, label('Services', 'The Best Services for Your Satisfaction'))

    render(serviceContainer, generateElement('div', 'service-items'))
    const serviceItems = document.querySelector('.service-items');

    data.serviceCard.forEach(item => {
        render(serviceItems, serviceCard(item.src, item.alt, item.title, item.description))
    });

}
export default services