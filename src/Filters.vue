<template>
<!-- FILTERS -->
<v-flex xs12>
  <v-card>
    <!-- <h4>
  					Filter
  				</h4>
  				 -->
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y>
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateRange.startDate"
                label="Startdatum"
                prepend-icon="event"
                readonly v-on="on">
              </v-text-field>
            </template>
            <v-date-picker
              v-model="dateRange.startDate"
              :max="dateRange.endDate"
              @input="menu1 = false"
              @change="updateDatesFromStrings"
              no-title>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="dateRange.startDate = ''; menu1 = false">
                Clear
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs6>
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y full-width>
            <template v-slot:activator="{ on }">
              <v-text-field v-model="dateRange.endDate" label="Enddatum" prepend-icon="event" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker
              v-model="dateRange.endDate"
              :min="dateRange.startDate"
              @change="updateDatesFromStrings"
              @input="menu2 = false"
              no-title>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="dateRange.endDate = ''; menu2 = false">
                Clear
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs1>
        </v-flex>
        <v-flex xs10>
          <v-range-slider
              @input="updateDatesFromInts"
              v-model="range"
              :max="getMaxDate"
              :min="getMinDate"
            >
          </v-range-slider>
        </v-flex>
        <v-flex xs1>
        </v-flex>
        <graph></graph>
      </v-layout>
    </v-container>
  </v-card>
</v-flex>
</template>

<script>
import {
  mapMutations,
  mapGetters
} from 'vuex';
import Graph from './Graph.vue';

export default {
  data() {
    return {
      /*DATETIMEPICKER*/
      dateFormat: 'D MMM',
      startDate: [],
      dates: [],
      dateRange: {
        startDate: '',
        endDate: ''
      },
      dateOption: '',
      menu1: false,
      menu2: false,
      range: [0, 100],
    }
  },
  components: {
    Graph,
  },
  methods: {
    ...mapMutations([
      'updateSelectedByDate',
    ]),
    logDates() {
      console.log(this.startDate, this.endDate);
    },
    formatDate(n) {
      const d = new Date(0);
      d.setUTCSeconds(n);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDay() + 1}`;
    },
    deformatDate(d) {
      return new Date(d).valueOf() / 1000;
    },
    updateDatesFromInts(val) {
      this.updateSelectedByDate(val);
      this.dateRange.startDate = this.formatDate(val[0]);
      this.dateRange.endDate = this.formatDate(val[1]);
    },
    updateDatesFromStrings(val) {
      this.range = [this.deformatDate(this.dateRange.startDate), this.deformatDate(this.dateRange.endDate)];
      console.log(this.dateRange);
    },
  },
  computed: {
    ...mapGetters([
      'getMinDate',
      'getMaxDate',
    ]),
  },
  mounted() {
    this.dateRange.startDate = this.formatDate(this.getMinDate);
    this.dateRange.endDate = this.formatDate(this.getMaxDate);
    this.range = [this.getMinDate, this.getMaxDate];
  },
  watch: {
    getMinDate(to) {
      this.dateRange.startDate = this.formatDate(to);
    },
    getMaxDate(to) {
      this.dateRange.endDate = this.formatDate(to);
    },

  }
}
</script>

<style lang="less">
.grey-heading {
    color: #666;
}

.margintop {
    margin-top: 20px;
}
</style>
