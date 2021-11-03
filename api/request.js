const _uni = uni
const get = (url, data) => {
    return _uni.request({
        url,
        data
    })
}

export {
    get
}