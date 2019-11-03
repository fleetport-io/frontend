<template lang="html">
<div>
  <v-flex xs12>
    <highcharts :options="chartOptions"></highcharts>
  </v-flex>
</div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
            type: 'column'
        },
        series: [{
          data: [],
          // pointStart: Date.UTC(this.getMinDate),
          // pointInterval: 24 * 3600 * 1000,
        }],
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
        title: {
          text: '',
        }
      }
    }
  },
  mounted() {
    this.chartOptions.series[0].data = this.getSelectedDurations;
  },
  computed: {
    ...mapGetters([
      'getSelectedDurations',
      'getMinDate',
    ]),
  },
  watch: {
    getSelectedDurations(to) {
      console.log(to);
      this.chartOptions.series[0].data = to;
    }
  },
}
</script>

<style lang="css" scoped>
div {
  width: 100%;
}
</style>
