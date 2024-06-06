/**
 * this function is for download files
 * @param {Element} tag - a tag
 * @param {string} url - url of a tag
 * @param {string} name - name of file to download
 */
export const downloadURI = (tag, url, name) => {
    tag.download = name; // <- name instead of 'name'
    tag.href = url;
    tag.click();
    tag.remove();
}