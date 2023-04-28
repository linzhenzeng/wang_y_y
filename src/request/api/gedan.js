import service from "..";
//获取歌单详情
export function getGendanList(id) {
   return service({
        method:'GET',
        url:`/playlist/detail?id=${id}`
    })
}
//获取歌单歌曲列表
export function musicList(id) {
    return service({
        method:'GET',
        url:`/playlist/track/all?id=${id}&limit=20&offset=0`
    })
}
//获取歌词
export function getLyric(id) {
    return service({
        method:'GET',
        url:`/lyric?id=${id}`
    })
}
