<template>
	<v-app>
  	<v-container grid-list-md text-xs-center>
			<v-layout row wrap>
				<v-flex xs12>
					<particle-header></particle-header>
						<!--
							<v-tabs fixed-tabs>
								<v-tab>
									Report
								</v-tab>
								<v-tab-item>

								-->
					<!-- <login v-if="!getLogStatus"></login> -->
					<all-content></all-content>

									<!--
								</v-tab-item>
								<v-tab>
									Diagramm
								</v-tab>
								<v-tab-item>
										<nav-bar>
										</nav-bar>
										<v-flex xs12>
											<content-chart></content-chart>
										</v-flex>
								</v-tab-item>
					<v-tabs>

					-->

				</v-flex>
			</v-layout>
		</v-container>
	</v-app>
</template>

<script>
	//HEADER
	import ParticleHeader from './ParticleHeader.vue';

	//DIAGRAM TAB
	import NavBar from './NavBar.vue';
	import ContentChart from './ContentChart.vue';

	//CONTENT
	import login from './Login.vue';
	import AllContent from './Content.vue';

	import { mapMutations, mapGetters } from 'vuex';

	import axios from 'axios';

	export default {
		name: 'App',
		data: function () {
			return {
				
			}
		},
		components: {
			ParticleHeader,
			NavBar,
			ContentChart,
			login,
			AllContent,
		},
		methods: {
			...mapMutations([
				'addObject',
				'addToSelected',
				'toggleLoading',
			]),
		},
		computed: {
			...mapGetters([
				'getLogStatus'
			])
		},
		mounted() {
			this.toggleLoading(true);
			this.axios
			.get('/api/getAllTrips')
			.then((response) => {
				this.addObject(response.data);
				this.addToSelected(response.data);
				this.toggleLoading(false);
			})
			.catch(error => {
				console.log(error)
				this.toggleLoading(false);
			});
		}
	}
</script>

<style lang="less">
</style>
