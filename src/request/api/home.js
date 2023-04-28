import service from "..";
//获取轮播图数据
export function getBanner(params) {
   return service({
        method:'GET',
        url:'banner?type=2'
    })
}
export function getMusic(params) {
    return service({
        method:'GET',
        url:'personalized?limit=10'
    })
}