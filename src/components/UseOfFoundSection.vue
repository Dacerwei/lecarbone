<template>
  <v-container>
    <h1>Use Of Found</h1>
    <pie-chart
      :data="chartData"
      :options="{
        'responsive': true,
        'maintainAspectRatio': false,
      }">
    </pie-chart>
  </v-container>
</template>

<script>
import PieChart from '@/components/PieChart';
import _ from 'lodash';

const useOfFoundData = [
  {
    title: 'marketing, sales and bonuses',
    data: 5,
    color: '#905856',
  },
  {
    title: 'forest conservation',
    data: 5,
    color: '#5F89F7',
  },
  {
    title: 'poverty alleviation',
    data: 5,
    color: '#DD78F8',
  },
  {
    title: 'legal and accounting services',
    data: 1,
    color: '#F08D35',
  },
  {
    title: 'land development',
    data: 25,
    color: '#5A8972',
  },
  {
    title: 'carbon credits development',
    data: 15,
    color: '#ECCF78',
  },
  {
    title: 'under-forest operation',
    data: 15,
    color: '#8FD7F8',
  },
  {
    title: 'IT system development',
    data: 15,
    color: '#EF807C',
  },
  {
    title: 'operation management',
    data: 14,
    color: '#94F7C2',
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
  name: 'UseOfFoundSection',
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

