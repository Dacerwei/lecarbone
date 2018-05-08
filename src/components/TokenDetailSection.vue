<template>
  <v-container>
    <h1>Token Details</h1>
    <v-layout row wrap>
        <v-flex xs12 sm6>
            <h2>Genernal Info</h2>
            <ul class="info-list">
                <li class="info-item">
                  Token name：LeCarbone Token
                </li>
                <li class="info-item">
                  Token symbol: LCT
                </li>
                <li class="info-item">
                  Platform：Ethereum
                </li>
                <li class="info-item">
                  Token standard：ERC 20
                </li>
                <li class="info-item">
                  Price Per Token：1LCT:10USD
                </li>
                <li class="info-item">
                  Token issuing(first time)：9,000,000 LCT
                </li>
                <li class="info-item">
                  Total token supply (max)：Depends on the next developing project
                </li>
                <li class="info-item">
                  Unsale token：We will reserve it until we sell it
                </li>
                <li class="info-item">
                  Decimails of Precision：3
                </li>
            </ul>
        </v-flex>
        <v-flex xs12 sm6>
            <pie-chart
            :data="chartData"
            :options="{
                'responsive': true,
                'maintainAspectRatio': false,
            }">
            </pie-chart>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PieChart from '@/components/PieChart';
import _ from 'lodash';

const useOfFoundData = [
  {
    title: '80% Token Sale',
    data: 80,
    color: '#5A8973',
  },
  {
    title: '20% Private Sale',
    data: 20,
    color: '#ECCF78',
  },
];

const chartData = {
  labels: _.map(useOfFoundData, data => data.title),
  datasets: [{
    data: _.map(useOfFoundData, data => data.data),
    backgroundColor: _.map(useOfFoundData, data => data.color),
  }],
};

export default {
  name: 'TokenDetailSection',
  components: {
    PieChart,
  },
  data() {
    return {
      chartData,
    };
  },
};
</script>

<style>
.info-item {
  text-align: left;
  list-style: none;
};
</style>

