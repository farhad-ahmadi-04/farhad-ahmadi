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
    const cursorModuls = await import("./effects/cursor/cursor.js")
    const scrollModuls = await import("./effects/scroll/scrollEffects.js")
    const tabModuls = await import("./effects/tab/tab.js")
    const sendEmail = await import("./effects/sendEmail/sendEmail.js")
    cursorModuls.cursor(app)
    scrollModuls.handelScroll()
    tabModuls.tab()
    sendEmail.emailHandeler()
}
initialize()