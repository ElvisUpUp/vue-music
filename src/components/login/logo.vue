<template>
	<div class="logo">
		<div class="logoze"></div>
		<div class="logimg">
			<img :src="logoimg" alt="" />
		</div>
	</div>
</template>

<script>
	import logo from "@/assets/img/logo.png"
	export default {
		name:"logo",
		components:{
			
		},
		data(){
			return {
				logoimg:logo
			}
		}
	}
</script>

<style lang="scss" scoped="">
	.logo{
		width: 100%;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url("../../assets/img/bg.jpg")no-repeat;
		background-size: 100%;
		position: relative;
		.logoze{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			background: linear-gradient(top, rgba(255,255,255,0.8),rgba(255,255,255,0.9));
			/*opacity: 0.6;*/
		}

		.logimg{
			width: 65px;
			height: 65px;
			z-index: 3;
			
			img{
				width: 100%;
			}
		}
	}
</style>