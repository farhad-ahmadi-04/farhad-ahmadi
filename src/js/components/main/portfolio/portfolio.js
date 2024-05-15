import generateElement from "../../../Assets/generateEle.js";
import render from "../../../Assets/render.js";
import portfolioLabel from "./portfolioLabel.js";
// import textBtn from "../../textBtn.js";

const portfolio = (data) => {
    const portfolioSec = document.querySelector(".portfolio-sec")
    render(portfolioSec, portfolioLabel("Portfolio"))

}
export default portfolio