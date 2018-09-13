<template>
		<div class="mytop">
			<div class="slef">
				<div class="selfHeadImg">
					<img :src=img.src1 alt="" />
				</div>
				<p class="username">小蜜蜂飞飞飞</p>
				<p class="lv">
					lv.10
				</p>
			</div>
			<div class="sign">
				<i class="iconfont icon-qiandao"></i>
				<span>签到</span>
			</div>
		</div>
</template>

<script>
	import topBg from "@/assets/img/topBg.jpg"
	import head from '@/assets/img/head.jpg'
	export default {
		name:"mytop",
		data(){
			return {
				img:{
					src1:head
				}
			}
		},
		components:{
			
		}
	}
</script>

<style lang="scss">
	.mytop{
		height: 150px;
		width: 100%;
		background: url(../../assets/img/topBg.jpg)no-repeat;
		background-size: 100%;
		overflow-y:auto ;
		display: flex;
		justify-content: space-between;
		position: relative;
		.mytop::after{
			content: "";
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: #fff;
			z-index: 2;
		}
		.slef{
			font-size:12px;
			color:#fff;
			display:flex;
			flex-direction:column;
			justify-content:space-around;
			height:60%;
			position: relative;
			margin-top:50px;
			margin-left:20px;
			
			.selfHeadImg{
				width: 50px;
				overflow: hidden;
				border-radius: 50%;
				img{
					width: 100%;
				}
			}
			p:nth-child(3){
				border-radius: 10px;
				height: 20px;
				line-height: 20px;
				width: 42px;
				border: 1px solid #fff;
				position: absolute;
				bottom: 6px;
				left: 65px;
			}
			.username{
				width: 65px;
				overflow: hidden;
				height: 20px;
				line-height: 20px;
				
			}
		}
		.sign{
			width: 60px;
			line-height: 20px;
			height: 20px;
			color: #fff;
			font-size: 12px;
			border: 1px solid #fff;
			border-radius: 10px;
			text-align: center;
			margin-right: 20px;
			margin-top: 113px;
		}
		
	}
</style>