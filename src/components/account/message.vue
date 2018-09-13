<template>
	<ul class="message">
		<li>
			<div class="left">
				<i class="iconfont icon-xiaoxixinfengnews"></i>
				<span>我的消息</span>
			</div>
			
		</li>
		<li>
			<div class="left">
				<i class="iconfont icon-huiyuan"></i>
				<span>会员中心</span>
			</div>
		</li>
		<li>
			<div class="left">
				<i class="iconfont icon-shangcheng"></i>
				<span>商城</span>
			</div>
			<div class="rightLi">
				<span class="smallFont">
					降噪头戴299元秒
				</span>
				<div class="er">
					<img :src=imgSrc.src1 alt="" />
				</div>
			</div>
		</li>
		<li>
			<div class="left">
				
				<i class="iconfont icon-94"></i>
				<span class="over">游戏推荐B发顺丰是法国</span>
			</div>
			<div class="rightLi">
				<span class="smallFont" title="登陆流星蝴蝶剑送经典皮肤">
					登陆流星蝴蝶剑送经典皮肤
				</span>
			</div>
		</li>
		<li>
			<div class="left">
				<i class="iconfont icon-zaixianketang"></i>
				<span>在线听歌免流量</span>
			</div>
			<div class="rightLi">
				
			</div>
		</li>
	</ul>
</template>

<script>
	import erji from "@/assets/img/erji.jpg"
	export default{
		name:'message',
		data(){
			return {
				imgSrc:{
					src1:erji,
//					src2:
				}
			}
		},
		components:{
			
		}
	}
</script>

<style lang="scss">
	ul{
		font-size: 12px;
		color: #000;
		text-align: left;
		li{
			height: 25px;
			width: 80%;
			margin:15px 12px 0px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			span{
				margin-left: 12px;
				display: inline-block;
			}
			.over{
				text-overflow: ellipsis;
				width: 69px;
			    overflow: hidden;
			    white-space: nowrap;
			}
			.rightLi{
				display: flex;
				justify-content: flex-start;
				.smallFont{
					transform: scale(0.7);
					color: dimgray;
					text-spacing: 2px;
					text-overflow: ellipsis;
					width: 69px;
				    overflow: hidden;
				    white-space: nowrap;
				}
				.er{
					width: 20px;
					float: right;
					img{
						width: 100%;
					}
				}
			}
		}
		li:nth-child(3){
			margin:9px 0px -7px 12px;
		}
	}
</style>