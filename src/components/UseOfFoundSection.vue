<template>
<div class="use-of-found-wrapper" :style="{'background-image': 'url(' + background + ')' }">
  <v-container class="use-of-found-container">
    <h1 class="use-title">{{ $t('message.UseOfFoundSection.title') }}</h1>
    <hr class="title-divider" />
    <pie-chart
      :data="chartData"
      :options="{
        'responsive': true,
        'maintainAspectRatio': false,
      }">
    </pie-chart>
  </v-container>
</div>
</template>

<script>
import PieChart from '@/components/PieChart';
import _ from 'lodash';
import background from '@/assets/background/use_of_fund.png';

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
      background,
    };
  },
};
</script>

<style scoped>
.use-title {
  color: #F1CF69;
  font-size: 30px;
  margin-bottom: 10px;
}
.title-divider {
  margin: 0 auto;
  width: 40px;
  border: 1px solid #F1CF69;
  color: #F1CF69;
  margin-bottom: 40px
}

.use-of-found-wrapper {
  padding: 5%;
}
.use-of-found-container {
  background-color: white;
  text-align: center;
  border-radius: 40px;
}
</style>

