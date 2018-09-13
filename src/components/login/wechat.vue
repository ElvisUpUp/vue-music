<template>
	<div class="wechat">
		<div class="logo">
			<div class="logo_img">
				<img :src="imglog" alt="" />
			</div>
			<p>网易云音乐</p>
		</div>
		<div class="dec">
			<p>登录应用后将获得一些权限</p>
			<p><span></span>获得你的公开信息（昵称、头像等）</p>
		</div>
		<button>确认登录</button>
	</div>
</template>

<script>
	import logo1 from "@/assets/img/logo1.png"
	export default{
		name:"wechat",
		components:{
			
		},
		data(){
			return {
				imglog:logo1
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.wechat{
		width: 100%;
		.logo{
			width: 80%;
			display:flex;
			margin:  0 auto;
			flex-direction: column;
			justify-content: center;
			align-items:center;
			border-bottom: 0.5px solid lightgrey;
			height:160px;
			.logo_img{
				width: 65px;
				height: 65px;
			    margin-top: 10px;
				img{
					width: 100%;
				}
			}
			p{
				font-weight: bold;
			    margin-top: 10px;
			}
		}
		.dec{
		    margin-top: 20px;
			text-align: left;
			margin-left: 10%;
			p{
				margin: 10px auto;
				font-size: 15px;
				font-weight: bold;
				&:nth-child(2){
					font-size: 12px;
					font-weight: normal;
					color: darkgray;
					span{
						display: inline-block;
						width: 8px;
						height: 8px;
						border-radius: 50%;
						background: darkgray;
						margin: auto 0;
						margin-right: 10px;
					}
				}
			}
		}
		button{
			width: 80%;
			height: 40px;
			margin: 20px auto;
			line-height: 40px;
			font-size: 16px;
			font-weight: bold;
			color: #fff;
			background:limegreen;
			border-radius: 5px;
			outline: none;
		}
	}
</style>