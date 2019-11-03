<template>
	<v-card id="searchbar">
		<v-nav>
			<v-col cols="1" align-self="center">
				<img src="./assets/img/fleetport-logo.svg" alt="fleetport.io">
			</v-col>

			<v-col>
				<v-form-input id="searchinput" type="text" placeholder="VIN"></v-form-input>
			</v-col>

			<v-col>
				<date-picker id="start-date" v-model="datestart" @dp-change="minChange" :config="optionsstart"></date-picker>
			</v-col>

			<v-col>
				<date-picker id="end-date" v-model="dateend" :config="optionsend"></date-picker>
			</v-col>

			<v-col>
				<v-btn id="searchbtn">
					Search
				</v-btn>
			</v-col>
		</v-nav>
	</v-card>
</template>

<script>
	export default {
		data() {
			return {
				datestart: null,
				optionsstart: {
					format: 'DD/MM/YYYY hh:mm',
					dayViewHeaderFormat: 'D. MMMM YYYY',
					stepping: 10,
					collapse: false,
					toolbarPlacement: 'bottom',
					showClose: true,
					locale: 'de'
				},
				dateend: null,
				optionsend: {
					format: 'DD/MM/YYYY hh:mm',
					dayViewHeaderFormat: 'D. MMMM YYYY',
					stepping: 10,
					collapse: false,
					toolbarPlacement: 'bottom',
					showClose: true,
					locale: 'de'
				}
			}
		},
		methods: {
			minChange(e) {
				console.log(this);
				//Vue.set(this.config, "showclose", false);
			}
		}
	}
</script>

<style lang="less">
	#searchbar {
		width: 100%;
	}
	#searchbtn {
		float: right;
	}
</style>
