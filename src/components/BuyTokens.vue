<template>
<div class="buy-token-wrapper" id="buy-tokens">
  <h1 class="buy-token-title">{{ $t('message.BuyTokens.title') }}</h1>
  <p class="buy-token-content">{{ $t('message.BuyTokens.subtitle') }}</p>
  <div class="transaction-area">
    <p>{{ $t('message.BuyTokens.tip_1') }}:</p>
    <v-layout row wrap justify-space-between align-content-center>
      <v-flex xs12 sm3 md4 class="input-container">
        <label>LCT</label>
        <input @change="lctToEth"
          id="lct-input"
          class="token-input"
          :value="lctOutPut"
          placeholder="LCT">
      </v-flex>
      <v-flex xs12 sm1 md1>
        <div class="exchange-icon"><i class="fas fa-exchange-alt"></i></div>
      </v-flex>
      <v-flex xs12 sm3 md4 class="input-container">
        <label>ETH</label>
        <input @change="ethToLct"
          id="eth-input"
          class="token-input"
          :value="ethOutPut"
          placeholder="ETH"/>
      </v-flex>
      <v-flex xs12 sm3 md3>
        <p class="exchange-tip text-xs-center">
          {{ $t('message.BuyTokens.exchange_rate', {rate: ethToUsdRate}) }}
        </p>
        <p class="exchange-tip text-xs-center">{{ $t('message.BuyTokens.rate_tip') }}</p>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm3 class="btn-container">
        <div class="buy-btn" outline>{{ $t('message.BuyTokens.book_now') }}</div>
      </v-flex>
    </v-layout>
    <p>{{ $t('message.BuyTokens.tip_2') }}</p>
    <p>{{ $t('message.BuyTokens.introduction') }}</p>
  </div>
</div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'BuyTokens',
  data() {
    return {
      lctOutPut: null,
      ethOutPut: null,
      lctToEthRate: null,
      ethToUsdRate: null,
    };
  },
  mounted() {
    this.initExchangeRate();
  },
  methods: {
    initExchangeRate() {
      this.lctToEthRate = 0.5;
      this.ethToUsdRate = 500;
    },
    lctToEth(e) {
      const value = _.toNumber(e.target.value);
      this.lctOutPut = value;
      this.ethOutPut = _.round(value * this.lctToEthRate, 2);
    },
    ethToLct(e) {
      const value = _.toNumber(e.target.value);
      this.ethOutPut = value;
      this.lctOutPut = _.round(_.divide(value, this.lctToEthRate), 2);
    },
  },
};
</script>

<style scoped>
.buy-token-title {
  color: #f1cf69;
  margin-bottom: 20px;
}
.buy-token-content {
  margin-bottom: 30px;
}
.buy-token-wrapper {
  padding: 5px;
}
.transaction-area {
  border-style: solid;
  border-width: 1px;
  border-color: lightgrey;
  padding: 30px;
}
.input-container {
  text-align: center;
}
.token-input {
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
}
.btn-container {
  text-align: center;
}
.buy-btn {
  background: #69F193;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  padding: 5px 10px;
  margin: 20px 0;
  cursor: pointer;
}
.exchange-icon {
  text-align: center;
}
.exchange-tip {
  text-align: left;
  font-size: 8px;
  font-weight: bold;
  margin: 0;
  color: #F1CF69;
}
</style>
