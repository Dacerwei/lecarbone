<template>
  <v-container id="token-detail">
    <h1 class="detail-title">{{ $t('message.TokenDetail.title') }}</h1>
    <v-layout row wrap>
        <v-flex xs12 sm6 class="info-container">
            <h2 class="info-title">{{ $t('message.TokenDetail.sub_title') }}</h2>
            <ul class="info-list">
                <li class="info-item" v-for="item in genernalInfoData" :key="item.fieldName">
                  <span>{{ $t(`message.TokenDetail.${item.fieldName}`) }} ：</span>
                  <span class="info-value">{{ item.value }}</span>
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
    title: 'Token Sale',
    data: 80,
    color: '#5A8973',
  },
  {
    title: 'Private Sale',
    data: 20,
    color: '#ECCF78',
  },
];

const genernalInfoData = [
  {
    fieldName: 'token_name',
    value: 'LeCarbone Token',
  },
  {
    fieldName: 'token_symbol',
    value: 'LCT',
  },
  {
    fieldName: 'platform',
    value: 'Ethereum',
  },
  {
    fieldName: 'token_standard',
    value: 'ERC 20',
  },
  {
    fieldName: 'price_per_token',
    value: '1LCT:10USD',
  },
  {
    fieldName: 'token_issuing',
    value: '9,000,000 LCT',
  },
  {
    fieldName: 'total_token_supply',
    value: 'Depends on the next developing project',
  },
  {
    fieldName: 'unsale_token',
    value: 'We will reserve it until we sell it',
  },
  {
    fieldName: 'decimails_of_precision',
    value: '3',
  },
];

export default {
  name: 'TokenDetailSection',
  components: {
    PieChart,
  },
  data() {
    return {
      genernalInfoData,
    };
  },
  computed: {
    chartData() {
      return {
        labels: _.map(useOfFoundData, data => `${data.title}(%)`),
        datasets: [{
          data: _.map(useOfFoundData, data => data.data),
          backgroundColor: _.map(useOfFoundData, data => data.color),
        }],
      };
    },
  },
};
</script>

<style scoped>
#token-detail {
  padding: 50px 0;
}
.info-item {
  text-align: left;
  list-style: none;
}
.detail-title, .info-value {
  color: #4A8B71;
}
.detail-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 32px;
}
.info-container {
  padding-left: 10%;
  padding-top: 10px;
}
.info-title {
  margin-bottom: 20px;
}
.info-list {
  line-height: 30px;
}
</style>

