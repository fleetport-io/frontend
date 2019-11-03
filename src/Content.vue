<template lang="html">
  <div>
    <!-- <v-btn @click="toggleLoggedIn(false)" color="primary">Log out</v-btn> -->
    <quick-view></quick-view>
    <filters></filters>
    <v-flex xs12>
      <report-total></report-total>
      <v-divider inset></v-divider>
      <report-single></report-single>
    </v-flex>
  </div>
</template>

<script>
	//REPORT TAB
  import QuickView from './Quick.vue';
  import Filters from './Filters.vue';
	import ReportTotal from './ReportTotal.vue';
	import ReportSingle from './ReportSingle.vue';

  import { mapMutations } from 'vuex';

  export default {
    components: {
      QuickView,
      Filters,
      ReportTotal,
      ReportSingle,
    },
    methods: {
      ...mapMutations([
        'toggleLoggedIn',
      ]),
    }
  }
</script>

<style lang="css">
</style>