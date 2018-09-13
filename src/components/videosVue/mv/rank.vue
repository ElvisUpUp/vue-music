<template>
	<div class="rank">
		<div class="rankleft">
			<h3>排行榜<span>></span></h3>
			<p class="time">更新时间：9月7日</p>
		</div>
		<div class="rankright">
			<div class="top">
				<img :src=vmessage.vurl[0].cover alt="" v-if="vmessage.vurl"/>
			</div>
			<div class="bottom">
				<img :src=vmessage.vurl[1].cover alt="" v-if="vmessage.vurl" />
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import api from '@/common/js/api.js'
	export default{
		name:"rank",
		data(){
			return {
				baseurl:"http://netease.bluej.cn",
				vmessage:{
					vurl:""
					
				},
				num:"10",
				headimg:[],
				mvurl:[]
			}
		},
				created(){
			var vm = this;
			axios.get(api.config.topMv + this.num)
			.then(function(res){
//				console.log(res);
//				console.log(res.data.data);
				vm.vmessage.vurl=res.data.data;
//				vm.vmessage.vurl.push(res.data.data);
//				console.log(vm.vmessage.vurl);
//				gethead(res.data.data.id);
				for(var i=0;i<vm.num;i++){
//					console.log(res.data.data[i].id);
					vm.gethead(res.data.data[i].id);
					vm.getMvData(res.data.data[i].id)
					
				}
				
			});
		},
		methods:{
			
			gethead(ids){
				var that = this;
				axios.get(api.config.commentMv + ids)
				.then(function(res){
//					console.log(res);
//					console.log(res.data.comments[0].user.avatarUrl);
					that.headimg.push(res.data.comments[0].user.avatarUrl);
//					console.log(that.headimg)
					
					
				})
			},
			getMvData(ids){
				var that = this;
				axios.get(api.config.mvData + ids)
				.then(function(res){
//					console.log(res.data.data.brs[240]);
					that.mvurl.push(res.data.data.brs[240]);
//					console.log(that.mvurl);
				})
			},
			vplay(idx, event){
				console.log(event);
				this.isClick=!this.isClick;
				console.log(this.isClick);
				var videoplay = document.querySelectorAll(".playAndPause");
					for(let i=0;i<this.num;i++){
						var video = document.querySelectorAll("video");
						video[i].currentTime=0;
						video[i].pause();
						video[idx].play();
						videoplay[i].style.display="block";
					}
				event.path[1].style.display="none";	
//				event.path[0].setAttribute("src","this.isClick==true? playimg:pauseimg")
			},
			vpause(idx, event){
				console.log(event)
				var videoplay = document.querySelectorAll(".playAndPause");
					for(let i=0;i<this.num;i++){
						var video = document.querySelectorAll("video");
						video[i].currentTime=0;
						video[idx].pause();
						event.path[1].children[1].style.display="block";	
						
					}
			}
			
			
		}
	}
</script>

<style lang="scss" scoped="">
	.rank{
		border-bottom: 1px solid gainsboro;
		border-top: 1px solid gainsboro;
		margin: 10px auto;
		padding: 6px 0;
		display: flex;
		justify-content: space-between;
		.rankleft{
			width: 120px;
			margin-left:-11px;
			p{
				font-size: 12px;
				margin-left: 22px;
			}
			
		}
		.rankright{
			
			width: 80px;
			position: relative;
			.top{
				width: 50px;
				position:absolute;
				top:5px;
				right:5px;
				z-index:4;
				img{
					width: 100%;
				}
			}
			.bottom{
				width: 40px;
				position:absolute;
				top:8px;
				right:25px;
				img{
					width: 100%;
				}
			}
		}
		
	}
</style>