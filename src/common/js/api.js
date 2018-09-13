var baseUrl = 'https://netease.bluej.cn'

var config = {
    djCategories: baseUrl + '/dj/catelist', // dj的所有种类
    djTypeRecommend: baseUrl + '/dj/recommend/type?type=', // 根据id获得对应的推荐dj
    djRecommend: baseUrl + '/dj/recommend', // 推荐电台
    personalized: baseUrl + '/personalized/', // 首页当日推荐
    homeSwiper: baseUrl + '/banner', // 首页轮播图
    register: baseUrl + '', // 注册
    topMv: baseUrl + '/top/mv?limit=', // 
    commentMv: baseUrl + '/comment/mv?id=', // mv 评论
    mvData: baseUrl + '/mv?mvid=', // mv 数据
    songDetails: baseUrl + '/song/detail?ids=', // 歌曲细节
    hotSearch: baseUrl + '/search/hot', // 热搜
    searchSuggest: baseUrl + '/search/suggest?keywords=', // 搜索建议
    searchResult: baseUrl + '/search/?keywords=' // 搜索结果
}

export default {
    config,
}