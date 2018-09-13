<template>
	<div class="livevideo">
		<div class="vodeoAnddec" v-for="(item,index) in vmessage.vurl">
			<div class="videocover">
				<video @click="vpause(index, $event)" width="300" height="" v-if="vmessage.vurl" :poster="item.cover"  :src="mvurl[index]">
					
				</video>
				<div class="playAndPause" @click="vplay(index, $event)">
					<img :src=playimg alt="" />
				</div>
				
			</div>
			<p class="abstract" v-if="vmessage.vurl">{{item.briefDesc!=null? item.briefDesc:item.name}}</p>		
			<div class="authorAndComment">
				<div class="aut">
					<div class="headPh">
						<img :src=headimg[index] />
					</div>
					<span>{{item.artistName}}</span>
				</div>
				<div class="comment">
					<i class="iconfont icon-pinglun"></i><span>100</span>
					<i class="iconfont icon-dianzan"></i><span>999+</span>
					<i class="iconfont icon-fenxiang"></i>
				</div>
				
			</div>	
		</div>	
		
		
	</div>
</template>

<script>
	import axios from "axios"
	import api from '@/common/js/api.js'
	import play from "@/assets/img/play.png"
	import pause from "@/assets/img/pause.png"
	export default {
		name:"liveVideo",
		components:{
			
		},
		data(){
			return {
				baseurl:"http://netease.bluej.cn",
				vmessage:{
					vurl:""
					
				},
				num:"5",
				headimg:[],
				mvurl:[],
				playimg:play,
				pauseimg:pause,
				isClick:"true"
				
				
				
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
//		mounted(){
//			var videoplay = document.querySelector(".playAndPause");
//			var video = document.querySelector("video");
//			videoplay.addEventListener("click",function(){
//				video.play();
//			})
//		}
		
	}
</script>

<style lang="scss">
	.livevideo{
		width: 100%;
		.videocover{
			width: 300px;
			margin: 0 auto;
			text-align:center;
			position:relative;
			video{
				width: 100%;
				height: 158px;
			}
			.playAndPause{
				width: 50px;
				height: 50px;
				position: absolute;
				top: 30%;
				left: 43%;
				/*z-index: 5;*/
				img{
					width: 100%;
					opacity: 0.5;
				}
			}
		}
		.abstract{
			width: 300px;
			margin: 8px auto ;
			font-size: 14px;
			text-align: left;
			
		   /* margin: 8px 0px 8px;*/
		}
		.authorAndComment{
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-bottom: 12px;
			.aut{
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-left:-18px;
				.headPh{
					width: 30px;
					border-radius: 50%;
					overflow: hidden;
					img{
						width: 100%;
					}
				}
				span{
					font-size: 12px;
					margin-left: 10px;
				}
				
			}
			.comment{
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 12px;
				width: 40%;
				span{
					margin-left: -12px;
				}
			}
		}
	}
</style>