<template>
	<div class="realocar-panel">
		<div class="base-container">

			<div class="realocar-panel__board">
				<p class="realocar-panel__board__titulo">VAGAS ABERTAS</p>
				<ul class="realocar-panel__board__ul">
					<li v-for="vaga in vagas" class="realocar-panel__board__box" @click.stop="selecionarVaga(vaga)" :class="{'selecionada': isSelecionada(vaga)}">
						<div class="realocar-panel__board__box__titulo"><div>{{vaga.titulo}}</div></div>
						<div class="realocar-panel__board__box__desc"><div>{{vaga.localTrabalho}}</div></div>
					</li>
					<li class="realocar-panel__board__box__bottom"></li>
				</ul>
			</div>

			<div class="realocar-panel__desc">
				<div class="realocar-panel__desc__titulo">DADOS DA VAGA</div>
				<div v-if="!!vagaSelecionada.idVaga">
					<div class="realocar-panel__desc__vaga">
						<div>
							<div class="realocar-panel__desc__vaga__titulo">{{vagaSelecionada.titulo}}</div>
							<div class="realocar-panel__desc__vaga__sub-titulo">{{vagaSelecionada.localTrabalho}}</div>
						</div>
						<div class="realocar-panel__desc__vaga__desc" v-html="vagaSelecionada.descricao"></div>
						<div class="realocar-panel__desc__candidatar">
							<div @click.stop="candidatar()">
								<span>Candidatar-se</span>
								<img class="realocar-panel__desc__candidatar__icon" src="../assets/up-arrow-bold.svg" alt="">
							</div>
						</div>
					</div>
				</div>
				<div v-else>
					<div class="realocar-panel__desc__vazio">Selecione uma vaga</div>
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
				alert(`Candidatou-se para vaga = id: ${this.vagaSelecionada.idVaga}, titulo: '${this.vagaSelecionada.titulo}'`)
			}
		}
	}
</script>

<style lang="scss" src="../style/realocarPanel.scss"></style>
