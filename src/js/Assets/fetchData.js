/**
 * to get data from json file - json file return json format 'cause of this we use json() method to parse json it to object
 * @param {String} url - address of file
 * @returns data - data is object
 */
const fetchData = async (url) => await (await fetch(url)).json();
export default fetchData;