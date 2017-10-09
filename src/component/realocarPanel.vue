<template>
	<div class="realocar-panel">
		<div class="base-container">
			<div class="realocar-panel__board">
				<div >
					<div v-for="vaga in vagas" class="realocar-panel__box">
						<div class="realocar-panel__box__titulo">{{vaga.titulo}}</div>
						<div class="realocar-panel__box__desc">{{vaga.descricaoCurta}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import * as values from '../constants/values.js'

	export default {
		name: 'realocarPanel',
		data() {
			return {
				vagas: values.VAGAS
			}
		}
	}
</script>

<style lang="scss" src="../style/realocarPanel.scss"></style>
