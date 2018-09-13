<template>
	<div class="account">
		<div class="acc">
		<mytop></mytop>
		<message></message>
		<friend></friend>
		<skin></skin>
		</div>	
		<mybottom></mybottom>
	</div>
</template>

<script>
	import mytop from "@/components/account/mytop.vue"
	import message from "@/components/account/message.vue"
	import friend from "@/components/account/friend.vue"
	import skin from "@/components/account/skin.vue"
	import mybottom from "@/components/account/mybottom.vue"
	
	export default {
		name:"account",
		components:{
			mytop,
			message,
			friend,
			skin,
			mybottom
		}
	}
</script>

<style lang="scss">
		.account{
			.acc{
				height: 95%;
				width: 80%;
				/*background: skyblue;*/
				position: fixed;
				top: 0;
				left: 0;
				overflow-y: auto;
			}
		}
</style>