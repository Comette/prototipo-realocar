<template>
	<div class="realocar-home">
		<div class="base-container">
			<div class="realocar-home__title">
				<p>Conheça o processo seletivo:</p>
				<div class="realocar-home__flow">
					<ul class="realocar-home__flow--ul">
						<li class="realocar-home__flow--li" v-for="etapa in etapas" @click="selecionarEtapa(etapa)">
							<div class="realocar-home__flow__title">{{etapa.nome}}</div>
							<div 
								class="realocar-home__flow__content" 
								:class="{'realocar-home__flow__content--active': isEtapaSelected(etapa), 'realocar-home__flow__content--done': isEtapaDone(etapa)}"
							></div>
						</li>
					</ul>
				</div>

				<div class="realocar-home__description" v-if="!!etapaSelecionada.descricao">
					<span class="realocar-home__description__text">{{etapaSelecionada.descricao}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import * as values from '../constants/values.js'

	export default {
		name: 'realocarHome',
		data() {
			return {
				etapas: _.values(values.ETAPAS_PROCESSO_SELETIVO),
				etapaSelecionada: values.ETAPAS_PROCESSO_SELETIVO.CANDIDATURA
			}
		},
		methods: {
			selecionarEtapa(etapa) {
				this.etapaSelecionada = etapa
			},
			isEtapaSelected(etapa) {
				return this.etapaSelecionada.numero === etapa.numero
			},
			isEtapaDone(etapa) {
				return this.etapaSelecionada.numero > etapa.numero
			}
		}
	}
</script>
<style lang="scss" src="../style/realocarHome.scss"></style>