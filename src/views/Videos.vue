<template>
	<div class="">
		<mHeader></mHeader>
	  <div class="videoPage">
	  	<div class="video_link">
	  		<router-link to="/videos/recommend">推荐</router-link>
	  		<router-link to="/videos/live">直播</router-link>
	  		<router-link to="/videos/reversion">翻唱</router-link>
	  		<router-link to="/videos/bgm">听BGM</router-link>
	  		<router-link to="/videos/mv">MV</router-link>
	  		<router-link to="/videos/dance">舞蹈</router-link>
	  		<router-link to="/videos/acg">ACG</router-link>
	  		<router-link to="/videos/plays">演奏</router-link>
	  	</div>
	  </div>
	  <router-view></router-view>
	</div>  
</template>
<script>
	import mHeader from "@/components/header/mHeader.vue"
		export default {
			name:"videos",
			components:{
				mHeader
			},
			data(){
				return {
					classList:[],
					show:"active"
				}
			},
			methods:{
				addClassN:function(){
					console.log(123);
//					if(classList=""){
//						
//						classList.push("active");
//						console.log(classList);
//					}
				}
			}
		}
</script>
<style lang="scss">
			.videoPage{	
					overflow-x: auto;
					.video_link{
						width: 502px;
						overflow-x: auto;
						display: flex;
						flex-grow: 0;
						flex-shrink: 0;
						justify-content: center;
						align-items: center;
						a{
							font-size: 14.5px;
							color: #000;
							margin: 10px 16px;
							padding-bottom: 3.5px;
							&.router-link-exact-active {
						      color: darkred;
						      border-bottom: 1px solid darkred;
						    }
						}
						
					}
			}
			
			

	
</style>