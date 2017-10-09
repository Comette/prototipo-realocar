<template>
	<div class="realocar-panel">
		<div class="base-container">

			<div class="realocar-panel__board">
				<div class="realocar-panel__board__titulo">Painel de Vagas</div>
				<div class="realocar-panel__board__container">
					<div v-for="vaga in vagas" class="realocar-panel__box" @click.stop="selecionarVaga(vaga)" :class="{'selecionada': isSelecionada(vaga)}">
						<div class="realocar-panel__box__titulo">{{vaga.titulo}}</div>
						<div class="realocar-panel__box__desc">{{vaga.descricaoCurta}}</div>
					</div>
				</div>
			</div>

			<div class="realocar-panel__desc">
				<div class="realocar-panel__desc__titulo">Dados da vaga</div>
				<div v-if="!!vagaSelecionada.idVaga">
					<div class="realocar-panel__desc__vaga">
						<div>
							<div class="realocar-panel__desc__vaga__titulo">{{vagaSelecionada.titulo}}</div>
							<div class="realocar-panel__desc__vaga__sub-titulo">{{vagaSelecionada.descricaoCurta}}</div>
						</div>
						<div class="realocar-panel__desc__vaga__desc">{{vagaSelecionada.descricaoCompleta}}</div>
					</div>
					<div class="realocar-panel__desc__candidatar">
						<div @click.stop="candidatar()">Canditadar-se</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import * as values from '../constants/values.js'
	import {Vaga} from '../dtos/vaga.js'

	export default {
		name: 'realocarPanel',
		data() {
			return {
				vagas: values.VAGAS,
				vagaSelecionada: {}
			}
		},
		methods: {
			selecionarVaga(vaga) {
				this.vagaSelecionada = new Vaga(vaga)
			},
			isSelecionada(vaga) {
				return vaga.idVaga === this.vagaSelecionada.idVaga
			},
			candidatar() {
				alert(`candidatou-se para vaga -> id: '${this.vagaSelecionada.idVaga}' titulo: '${this.vagaSelecionada.titulo}'`)
			}
		}
	}
</script>

<style lang="scss" src="../style/realocarPanel.scss"></style>
