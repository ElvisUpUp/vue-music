<template>
	<div class="login">
		<logo></logo>
		<method></method>
		<othermethods></othermethods>
	</div>
</template>

<script>
	import logo from "@/components/login/logo.vue"
	import method from "@/components/login/method.vue"
	import othermethods from "@/components/login/othermethods.vue"
	export default {
		name:"login",
		components:{
			logo,
			method,
			othermethods
		}
	}
</script>

<style>
</style>