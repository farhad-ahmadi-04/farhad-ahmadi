import domGenerator from "../../../../../node_modules/dom-generator/dist/domGenerator.js";
import render from "../../../Assets/render.js";
import label from "../../lable.js";

const portfolio = (data) => {
    const portfolioSec = document.querySelector(".portfolio-sec")
    render(portfolioSec, label("portfolio", "...this is test text..."))
}
export default portfolio