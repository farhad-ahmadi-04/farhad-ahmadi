/**
 * this function is for download files
 * @param {Element} tag - a tag
 * @param {string} url - url of a tag
 * @param {string} name - name of file to download
 */
export const downloadURI = (url, name) => {
    const tag = document.createElement('a');
    tag.download = name;
    tag.href = url;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
}