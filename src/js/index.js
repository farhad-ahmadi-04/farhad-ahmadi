// main js file
import header from "@/js/section/header/header.js";
import { loadMain } from "@/js/section/main/main.js";
import footer from "@/js/section/footer/footer.js";
import "@/style/index.scss";

const app = document.querySelector('.app')

// get render from sectins & effects
const initialize = async () => {
    header(app)
    await loadMain(app)
    footer(app)
    const scrollModuls = await import("@/js/effects/scroll/scrollEffects.js")
    const cursorModuls = await import("@/js/effects//cursor/cursor.js")
    const tabModuls = await import("@/js/effects//tab/tab.js")
    const sendEmail = await import("@/js/effects//sendEmail/sendEmail.js")
    scrollModuls.handelScroll()
    cursorModuls.cursor(app)
    tabModuls.tab()
    sendEmail.emailHandeler()
}
initialize()