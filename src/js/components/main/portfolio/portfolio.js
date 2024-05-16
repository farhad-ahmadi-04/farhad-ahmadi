import render from "../../../Assets/render.js";
import textBtn from "../../textBtn.js";
import portfolioLabel from "./portfolioLabel.js";
// import textBtn from "../../textBtn.js";

/**
 * create portfoliosection and add component to the section:
 * 1st: get render from label 
 * 2nd: find categories from object and push it to array
 * 3rd: get render from categories by map method
 * @param {object} data data from json file
 */
const portfolio = (data) => {
    const portfolioSec = document.querySelector(".portfolio-sec")
    render(portfolioSec, portfolioLabel("Portfolio"))

    const category = document.querySelector(".category")

    // find categoies
    const uniqueCategory = Object.keys(data.portfolio)
    // get render from categories
    render(category, textBtn("All", "primary--text-btn"))
    uniqueCategory.map(item => render(category, textBtn(item, "secondary--text-btn")))

}
export default portfolio