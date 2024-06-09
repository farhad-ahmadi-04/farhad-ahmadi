// main js file
import header from "./section/header/header.js";
import { loadMain } from "./section/main/main.js";
import footer from "./section/footer/footer.js";
import "../style/index.scss";

const app = document.querySelector('.app')

// get render from sectins & effects
const initialize = async () => {
    header(app)
    await loadMain(app)
    footer(app)
    const scrollModuls = await import("./effects/scroll/scrollEffects.js")
    const cursorModuls = await import("./effects/cursor/cursor.js")
    const tabModuls = await import("./effects/tab/tab.js")
    const sendEmail = await import("./effects/sendEmail/sendEmail.js")
    scrollModuls.handelScroll()
    cursorModuls.cursor(app)
    tabModuls.tab()
    sendEmail.emailHandeler()
}
initialize()