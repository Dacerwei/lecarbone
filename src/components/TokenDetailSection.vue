<template>
  <v-container id="token-detail">
    <h1 class="detail-title">Token Details</h1>
    <v-layout row wrap>
        <v-flex xs12 sm6 class="info-container">
            <h2>Genernal Info</h2>
            <ul class="info-list">
                <li class="info-item" v-for="item in genernalInfoData" :key="item.fieldName">
                  <span>{{ item.fieldName }}</span>：<span class="info-value">{{ item.value }}</span>
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

const genernalInfoData = [
  {
    fieldName: 'Token name',
    value: 'LeCarbone Token',
  },
  {
    fieldName: 'Token symbol',
    value: 'LCT',
  },
  {
    fieldName: 'Platform',
    value: 'Ethereum',
  },
  {
    fieldName: 'Token standard',
    value: 'ERC 20',
  },
  {
    fieldName: 'Price Per Token',
    value: '1LCT:10USD',
  },
  {
    fieldName: 'Token issuing(first time)',
    value: '9,000,000 LCT',
  },
  {
    fieldName: 'Total token supply (max)',
    value: 'Depends on the next developing project',
  },
  {
    fieldName: 'Unsale token',
    value: 'We will reserve it until we sell it',
  },
  {
    fieldName: 'Decimails of Precision',
    value: '3',
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
      genernalInfoData,
    };
  },
};
</script>

<style scoped>
#token-detail {
  padding-top: 100px;
  padding-bottom: 100px;
}
.info-item {
  text-align: left;
  list-style: none;
}
.detail-title, .info-value {
  color: #4A8B71;
}
.info-container {
  padding-left: 80px;
  padding-top: 20px;
}
</style>

