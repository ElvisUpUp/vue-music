<template>
	<div class="othermethods">
		<p class="title">其他登录方式</p>
		<div class="othmethods">
			<router-link to="/login/wechat">
				<i class="iconfont icon-wei_xin"></i>
				<p>微信</p>
			</router-link>
			<router-link to="/login/wechat">
				<i class="iconfont icon-_QQ"></i>
				<p>QQ</p>
			</router-link>
			<router-link to="/login/wechat">
				<i class="iconfont icon-weibo"></i>
				<p>微博</p>
			</router-link>
			<router-link to="/login/wechat">
				<i class="iconfont icon-wangyi"></i>
				<p>网易邮箱</p>
			</router-link>
		</div>
	</div>
	
</template>

<script>
	import axios from "axios"
	import api from '@/common/js/api.js'
	export default {
		name:"othermethods"
	}
</script>

<style lang="scss" scoped="">
	.othermethods{
		width: 100%;
		position: absolute;
		bottom: 20px;
		.title{
			width: 100%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			
			font-size: 12px;
			color: grey;
		}
		.title::after{
			content: "";
			display: inline-block;
			width: 40px;
			height: 1px;
			background: lightgrey;
			margin-left: 15px;
			/*margin-bottom: 2px;*/
		}
		.title::before{
			content: "";
			display: inline-block;
			width: 40px;
			height: 1px;
			margin-right: 15px;
			background:lightgrey;
		}
		.othmethods{
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin: 20px auto 0px;
			width: 250px;
			a{
				.iconfont{
					border:1px solid lightgray;
					border-radius: 50%;
					font-size: 24px;
					padding: 7px;
				}
				.icon-wei_xin{
					color: #1afa29;
				}
				.icon-_QQ{
					color: #1193db;
				}
				.icon-weibo,.icon-wangyi{
					color:#d81e06;
				}
				p{
					color: grey;
					font-size: 12px;
					transform: scale(0.8);
					margin-top: 20px;
				}
			}
		}
	}
</style>