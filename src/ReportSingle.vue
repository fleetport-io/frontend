<template>
			<v-card>
				<v-subheader>Einzelansicht</v-subheader>
				<v-data-table hover responsive :items="getSelectedObjects" :loading="getLoadingStatus" :headers="fields">
					<template slot="items" slot-scope="props">
						<tr>
			      	<td class="text-xs-left" v-for="prop in fields.map(a => a.value)">{{ formatView(prop, props.item[prop]) }}</td>
						</tr>
	    		</template>
					<template slot="no-data">
						<span v-if="getLoadingStatus">Fetching...</span>
						<span v-else>No data available!</span>
			    </template>
				</v-data-table>
				<download-excel
					:data="getSelectedObjects"
					title="Report"
					name="report.xls">
					<v-btn variant="primary">Download Report</v-btn>
				</download-excel>
			</v-card>
</template>

<script>
	import { mapGetters } from 'vuex';
	import HELPERS from './js/helpers.js';

	export default {
	  mixins: [HELPERS],
		data() {
			return {
				perPage: 2,
				fields: [
					{ text: 'Start', value: 'startTime', sortable: true },
					{ text: 'End', value: 'endTime', sortable: true },
					{ text: 'Duration', value: 'duration', sortable: true },
					{ text: 'Odometer Start', value: 'odometerStart', sortable: true },
					{ text: 'Odometer End', value: 'odometerEnd', sortable: true },
					{ text: 'Distance', value: 'distance', sortable: true },
					{ text: 'Average Speed', value: 'avgSpeed', sortable: true },
					{ text: 'Max Speed', value: 'maxSpeed', sortable: true },
					{ text: 'Fuel Spent', value: 'spentFuel', sortable: true },
				],
			}
		},
		computed: {
			...mapGetters([
		    'getSelectedObjects',
			  'getLoadingStatus',
			]),
		},
	}
</script>

<style scoped>
  td {
		 vertical-align: middle;
	}
	tr:nth-of-type(even) {
		background-color: #F5F5F5;
	}

</style>
