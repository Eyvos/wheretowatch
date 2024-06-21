export const getImageByURL = (url?: string, path?: string) => {
    if (path == null || path == '' || url == null || url == '') {
        return ''
    }
    return `${url}${path}`
};