//https://apis.map.qq.com/ws/district/v1/search?keyword=500103&key=6XWBZ-GKIRX-4IP4V-7BKKC-3YKAF-N6FPK&get_polygon=2
import {get} from "./request"
import config from "../config/appConfig"

export const searchDistrict = (keyword) => {
    return get("https://apis.map.qq.com/ws/district/v1/search", {
        keyword: keyword,
        key: config.TX_MAP_KEY,
        get_polygon: 2
    }).then(res=>{
        const [err,data] = res
        if(err){
            throw new Error(err)
        }
        return data.data
    })
}