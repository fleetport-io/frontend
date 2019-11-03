import Vue from 'vue';
import Vuex from 'vuex';

import mockData from '../assets/akari.json';

Vue.use(Vuex);

const getters = {
	getObjects: s => s.objects,
	getSelectedObjects: s => s.selectedObjects,
	getLoadingStatus: s => s.loading,
	getLogStatus: s => s.loggedIn,
	getFields: s => s.fields,
	getMinDate: s => Math.min(...s.objects.map(x => x.startTime)),
	getMaxDate: s => Math.max(...s.objects.map(x => x.endTime)),
	getDurations: s => s.objects.map((x) => Math.abs(x.duration)),
	getSelectedDurations: s => s.selectedObjects.map((x) => Math.abs(x.duration)),
	getObjectsByStartDate: s => d => s.objects.filter(x => x.endTime >= d),
}

const mutations = {
	addObject(state, object) {
		state.objects.push(...object);
	},
	removeAllObjects(state) {
		state.objects = [];
	},
	addToSelected(state, object) {
		state.selectedObjects.push(...object);
	},
	removeAllSelected(state) {
		state.selectedObjects = [];
	},
	toggleLoading(state, bool) {
		state.loading = bool;
	},
	toggleLoggedIn(state, bool) {
		state.loggedIn = bool;
	},
	updateSelectedByDate(state, arr) {
		state.selectedObjects = state.objects.filter(x => x.startTime >= arr[0] && x.endTime <= arr[1]);
	},
	setObjects(state, arr) {
		state.objects = arr;
	},
}

const state = {
    objects: [],
	selectedObjects: [],
	loading: false,
	loggedIn: false,
}

export default new Vuex.Store({
    state,
	getters,
    mutations
});
