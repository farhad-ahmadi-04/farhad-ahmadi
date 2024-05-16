import generateElement from "../../../Assets/generateEle.js";
import render from "../../../Assets/render.js";
import textBtn from "../../textBtn.js";
import portfolioLabel from "./portfolioLabel.js";
// import textBtn from "../../textBtn.js";

const portfolio = (data) => {
    const portfolioSec = document.querySelector(".portfolio-sec")
    render(portfolioSec, portfolioLabel("Portfolio"))

    const category = document.querySelector(".category")

    // find categoies
    const uniqueCategory = Object.keys(data.portfolio)
    // get render fron categories
    render(category, textBtn("All", "primary--text-btn"))
    uniqueCategory.map(item => render(category, textBtn(item, "secondary--text-btn")))

}
export default portfolio