<template>
	<div class="phonelogin">
		<div class="top">
			<i class="iconfont icon-fanhui" @click="toLast"></i>
			<p>手机号登录</p>
		</div>
		<div class="phoneAndPsd">
			<div class="">
				<i class="iconfont icon-unie639"></i>
				<span>+86</span>
				<input id="num" type="number" v-model="phoneNum"/>
				<i class="iconfont icon-cuo" @click="resets"></i>
			</div>
			<div class="">
				<i class="iconfont icon-mima"></i>
				<input id="pwd" type="password" v-model="psd" />
			</div>
			<button @click="login">登录</button>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import api from '@/common/js/api.js'
	export default {
		name:"phonelogin",
		data(){
			return {
				phoneNum:"",
				psd:"",
				baseurl:"http://netease.bluej.cn/"
			}
		},
		methods:{
			toLast(){
				this.$router.go("-1")
			},
			login(){
				var numInput = document.querySelector("#num");
				var pwdInput = document.querySelector("#pwd");
				var that = this;
				console.log(numInput);
				if(typeof(this.phoneNum)=="number" || this.phoneNum.length!=11){
					numInput.setAttribute("placeholder","请输入正确的手机号");
					numInput.value="";
					pwdInput.value="";
				}else{
					axios.get(this.baseurl+"login/cellphone?phone="+this.phoneNum+"&password="+this.psd)
					.then(function(res){
								console.log(res);
								if(res.data.bindings){
									that.$router.push({path:"/Home"})
								}else{
									pwdInput.setAttribute("placeholder","账号或密码错误");
									pwdInput.value="";
								}
						})
					}
				},
				resets(){
					var numInput = document.querySelector("#num");
					var pwdInput = document.querySelector("#pwd");
						numInput.value="";
						pwdInput.value="";
				}
			}
		
		}
</script>

<style lang="scss">
	.phonelogin{
		width: 100%;
		.top{
			width: 100%;
			height: 80px;
			background: #db4135;
			text-align: left;
			display:flex;
			justify-content:flex-start;
			align-items:flex-end;
			.icon-fanhui,p{
				font-size: 16px;
				color: #fff;
				font-weight: bold;
				text-align: left;
				margin-bottom: 20px;
				margin-left: 12px;		
			}
		}
		.phoneAndPsd{
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			div{
				text-align: left;
				width: 90%;
				margin-top: 15px;
				border-bottom: 1px solid lightgray;
				display: flex;
				align-items: center;
				.icon-cuo{
					align-self: flex-end;
					margin-left:-15px
				}
				.iconfont{
					font-size: 20px;
					margin-right: 8px;
					color: #000000;
				}
			}
			input{
				padding-left: 10px;
				outline: none;
				border: none;
				height: 35px;
				font-size: 18px;
				
			}
			button{
				outline: none;
				border: none;
				height: 35px;
				font-size: 18px;
				width: 85%;
				height: 35px;
				line-height: 35px;
				text-align: center;
				border-radius: 18px;
				color: #fff;
				background: #df4337;
			    font-size: 15px;
			    background: #df4337;
			    margin-top: 30px;
			}
		}
		
	}
</style>