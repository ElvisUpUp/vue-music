import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import searchResult from './views/searchResult.vue'
import search from './views/Search.vue'
import Video from './views/Videos.vue'
import login from './views/login.vue'

Vue.use(Router)

export default new Router({
	routes: [
		// 发现
		{
			path: '/index',
			name: 'home',
			component: Home
		},
		// 视频
		{
			path: '/videos',
			name: 'videos',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import( /* webpackChunkName: "about" */ './views/Videos.vue'),
			children: [ //定义video子路由
				{
					path: "/videos/recommend",
					name: "recommend",
					component: () =>
						import("./components/videosVue/Recommend.vue")
				},
				{
					path: "/videos/live",
					name: "live",
					//    		  	component:()=>import("./components/videosVue/Live.vue")
					component: resolve => require(["./components/videosVue/Live.vue"], resolve)
				},
				{
					path: "/videos/reversion",
					name: "reversion",
					component: () =>
						import("./components/videosVue/Reversion.vue")
				},
				{
					path: "/videos/mv",
					name: "mv",
					component: () =>
						import("./components/videosVue/MV.vue")
				},
				{
					path: "/videos/dance",
					name: "dance",
					component: () =>
						import("./components/videosVue/Dance.vue")
				},
				{
					path: "/videos/bgm",
					name: "bgm",
					component: () =>
						import("./components/videosVue/BGM.vue")
				},
				{
					path: "/videos/acg",
					name: "acg",
					component: () =>
						import("./components/videosVue/ACG.vue")
				},
				{
					path: "/videos/plays",
					name: "plays",
					component: () =>
						import("./components/videosVue/Play.vue")
				},
			]
		},

		// 我的
		{
			path: '/my',
			name: 'my',
			component: () =>
				import('./views/My.vue')
		},
		// 朋友
		{
			path: '/friend',
			name: 'friend',
			component: () =>
				import('./views/Friend.vue')
		},
		// 账号
		{
			path: '/account',
			name: 'account',
			component: () =>
				import('./views/Account.vue')
		},
		// 查找
		{
			path: '/search',
			name: 'search',
			component: search,
			children: [{
				path: 'result',
				name: 'result',
				component: searchResult
			}]
		},
		// 播放
		{
			path: '/play',
			name: 'play',
			component: () =>
				import('./views/play.vue')
		},
		{ //登陆
			path: '/login',
			name: 'login',
			component: () =>
				import('./views/login.vue')
		},
		{ //微信登录
			path: '/login/wechat',
			name: 'wechat',
			component: () =>
				import('./components/login/wechat.vue')
		},
		{ //手机登录
			path: '/login/phonelogin',
			name: 'phonelogin',
			component: () =>
				import('./components/login/phonelogin.vue')
		}
	]
})