<template>
	<div class="mv">
		<mvselected></mvselected>
		<rank></rank>
		<videolive></videolive>
	</div>
</template>

<script>
	import mvselected from "@/components/videosVue/mv/mvselected.vue"
	import rank from "@/components/videosVue/mv/rank.vue"
	import videolive from "@/components/videosVue/live/videolive.vue"
	export default {
		name:"mvselet",
		components:{
			mvselected,
			rank,
			videolive
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
	mvselected{
		width: 100%;
	}
</style>