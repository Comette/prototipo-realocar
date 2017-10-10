<template>
	<div>
		<realocar-header></realocar-header>
		<realocar-panel></realocar-panel>
		<realocar-home></realocar-home>
	</div>
</template>

<script>
import realocarHeader from './component/realocarHeader.vue'
import realocarHome from './component/realocarHome.vue'
import realocarPanel from './component/realocarPanel.vue'

export default {
	name: 'app',
	components: { realocarHeader, realocarHome, realocarPanel }
}
</script>

<style lang="scss">
body {
	margin: 0;
	font-family: Verdana, Tahoma, sans-serif;
}
@media (min-width: 1024px){
	.base-container{
		margin: 0px 50px;
	}
}
@media (min-width: 1360px){
	.base-container{
		margin: 0px 150px;
	}
}
@media (min-width: 1680px){
	.base-container{
		margin: 0px 300px;
	}
}
</style>
