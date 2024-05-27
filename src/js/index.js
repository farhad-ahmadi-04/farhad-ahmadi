// main js file
import header from "./section/header/header.js";
import { loadMain } from "./section/main/main.js";
import footer from "./section/footer/footer.js";

const app = document.querySelector('.app')

// get render from sectins & effects
const initialize = async () => {
    header(app)
    await loadMain(app)
    footer(app)
    const scrollModuls = await import("./effects/scrollEffects.js")
    scrollModuls.handelScroll()
}
initialize()