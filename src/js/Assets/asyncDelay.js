/**
 * A simple function, that simply takes in the amount of milliseconds you wish to wait as a parameter. We then immediately return a new Promise, which is resolved when setTimeout completes.
 * @param {number} time - the time that you wish to wait as a parameter
 * @returns 
 */
export const asyncDelay = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})