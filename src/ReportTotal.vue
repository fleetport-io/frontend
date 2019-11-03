<template>
			<v-card>
				<v-subheader>Gesamtansicht</v-subheader>
				<v-data-table
					hover
					responsive
					striped
					:items="itemsProcessed"
					:headers="fields"
					:loading="this.getLoadingStatus"
					hide-actions
					expand
				>
					<template slot="items" slot-scope="props">
						<tr>
			      	<td class="text-xs-right" v-for="prop in fields.map(a => a.value)">{{ formatView(prop, props.item[prop]) }}</td>
						</tr>
	    		</template>
					<template slot="no-data">
						<span v-if="getLoadingStatus">Fetching...</span>
						<span v-else="getLoadingStatus">No data available!</span>
			    </template>
				</v-data-table>
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
					{ text: 'Overall Duration', value: 'duration', sortable: false },
					{ text: 'Overall Distance', value: 'distance', sortable: false },
					{ text: 'Average Speed', value: 'avgSpeed', sortable: false },
					{ text: 'Max Speed', value: 'maxSpeed', sortable: false },
					{ text: 'Fuel Spent', value: 'spentFuel', sortable: false },
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

<style>
	td {
    vertical-align: top;
	}
</style>
