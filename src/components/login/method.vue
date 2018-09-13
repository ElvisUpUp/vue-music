<template>
	<div class="method">
		<p @click="toLogin">手机号登录</p>
		<p>注册</p>
	</div>
</template>

<script>
	import api from '@/common/js/api.js'
	import axios from "axios"
	export default {
		name:"methods",
		data(){
			return {
			baseurl:"http://netease.bluej.cn/"	
			}
		},
		methods:{
			toLogin(){
				this.$router.push({path:"/login/phonelogin"});
			}
		},
		created(){
			axios.get("http://netease.bluej.cn/login/cellphone?phone=1562212975&password=xiemengdi1109")
			.then(function(res){
				console.log(res);
			})
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped="">
	.method{
		width: 100%;
		p{
			width: 80%;
			height: 35px;
			line-height: 35px;
			text-align: center;
			margin: 15px auto;
			border-radius: 17.5px;
			border: 1px solid red;
			font-size: 14px;
			font-weight: bold;
			color: red;
		}
	}
</style>