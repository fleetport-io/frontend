<template lang="html">
  <v-flex xs12>
    <v-card outline>
      <v-layout text-sm-left class="p">
        <v-flex xs3>
          <h2>Verbrauch Heute: </h2>
          <h2>Verbrauch/100km Heute: </h2>
          <h2>Kilometer Heute: </h2>
        </v-flex>
        <v-flex xs3>
          <h2 class="thinner">{{ todaysData.verbrauch }} l</h2>
          <h2 class="thinner">{{ todaysData.pro }} l / km</h2>
          <h2 class="thinner">{{ todaysData.kilometer }} km</h2>
        </v-flex>
        <v-flex xs3>
          <h2>Verbrauch Bisher:</h2>
          <h2>Verbrauch/100km Bisher: </h2>
          <h2>Kilometer Bisher: </h2>
        </v-flex>
        <v-flex xs3>
          <h2 class="thinner">{{ itemsProcessed[0].spentFuel }} l</h2>
          <h2 class="thinner">{{ Math.round(100 * itemsProcessed[0].spentFuel / itemsProcessed[0].distance) / 10000 }} l / km</h2>
          <h2 class="thinner">{{ itemsProcessed[0].distance }} km</h2>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapGetters } from 'vuex';

  import HELPERS from './js/helpers.js';

  export default {
    mixins: [HELPERS],
    computed: {
      ...mapGetters([
        'getObjectsByStartDate',
        'getSelectedObjects'
        ]),
      verbHeute() {
        console.log('verbHeute');
        var d = new Date();
        d.setHours(0,0,0,0);
        const fml = this.getObjectsByStartDate(d.getTime()/1000);
        console.log(fml);
        return fml;
      },
      todaysData() {
        const ret = {
          verbrauch: 0,
          kilometer: 0,
          pro: 0,
        };
        for (let i = 0; i < this.verbHeute.length; i += 1) {
          ret.verbrauch += this.verbHeute[i].spentFuel;
          ret.kilometer += this.verbHeute[i].distance;
        }
        console.log(ret);
        return ret;
      },
    },
  }
</script>

<style lang="less">
  .p {
    padding: 16px;
  }

  .thinner {
    font-weight: 300;
  }

  h2 {
    font-weight: 400;
  }
</style>