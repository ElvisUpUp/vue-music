<template>
	<div class="">
		
		<h3>MV精选 <span>></span></h3>
		<div class="mvvideo">
			<div v-if="index>4&&index<9" class="vodeoAnddec" v-for="(item,index) in vmessage.vurl">
				<div class="videocover">
					<video @click="vpause1(index, $event)" width="150" height="" v-if="vmessage.vurl" :poster="item.cover"  :src="mvurl[index]">
						
					</video>
				</div>
				<p class="abstract" v-if="vmessage.vurl">{{item.name}}</p>
				<p class="abstract" v-if="vmessage.vurl">{{item.artistName}}</p>
				
				
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
				num:"10",
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
			}
//			vplay1(idx, event){
//				console.log(event);
//				this.isClick=!this.isClick;
//				console.log(this.isClick);
//				var videoplay = document.querySelectorAll(".playAndPause");
//					for(let i=0;i<this.num;i++){
//						var video = document.querySelectorAll("video");
//						video[i].currentTime=0;
//						video[i].pause();
//						video[idx].play();
//						videoplay[i].style.display="block";
//					}
//				event.path[1].style.display="none";	
////				event.path[0].setAttribute("src","this.isClick==true? playimg:pauseimg")
//			},
//			vpause1(idx, event){
//				console.log(event)
//				var videoplay = document.querySelectorAll(".playAndPause");
//					for(let i=0;i<this.num;i++){
//						var video = document.querySelectorAll("video");
//						video[i].currentTime=0;
//						video[idx].pause();
////						event.path[1].children[1].style.display="block";	
//						
//					}
//			}
			
			
		}

		
	}
</script>

<style lang="scss" scoped="scoped">
		h3{
			text-align: left;
			padding-left: 15px;
		}
	.mvvideo{
		width: 350px;
		display: flex;
		flex-wrap: wrap;
		.vodeoAnddec{
			width:140px;
			margin:0 8px;
			:nth-child(4){
				height: 85px;
			}
			.videocover{
				width: 150px;
				height: 85px;
				margin: 0 auto;
				text-align:center;
				position:relative;
				display: flex;
				align-items: center;
				video{
					width: 100%;
					vertical-align: middle;
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
				width: 100px;
				margin: 0px auto ;
				font-size: 14px;
				text-align: left;
				text-overflow: ellipsis;
			    overflow: hidden;
			    white-space: nowrap;
			    text-align: center;
			}
		}

	}
</style>