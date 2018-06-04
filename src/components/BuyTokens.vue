<template>
<div class="buy-token-wrapper">
  <h1 class="buy-token-title">Buy Tokens</h1>
  <p>
    Fund your account in order to confirm purchase.
    The number of Lecarbone token will be automatically
    calculated when we recieve your deposit.
  </p>
  <div class="transaction-area">
    <p>Please enter the amount of Lecarbone token you want to buy:</p>
    <v-layout row wrap justify-space-between align-content-center>
      <v-flex xs12 sm3 md4 class="input-container">
        <input id="lct-input" class="token-input"/>
      </v-flex>
      <v-flex xs12 sm1 md1>
        <div class="exchange-icon"><i class="fas fa-exchange-alt"></i></div>
      </v-flex>
      <v-flex xs12 sm3 md4 class="input-container">
        <input id="eth-input" class="token-input"/>
      </v-flex>
      <v-flex xs12 sm3 md3>
        <p class="exchange-tip">Rate 1 ETH: 500.32 USD</p>
        <p class="exchange-tip">(the rate will update at anytime)</p>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm3 class="btn-container">
        <v-btn outline color="green" class="buy-btn">BUY NOW</v-btn>
      </v-flex>
    </v-layout>
    <p>
      Each transaction will be precessed accordingly
    </p>
    <p>
      Transactions will be automatically added to
      your balace when they are confirmed by the network.
      It may take up to few hours. Please be patient.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'BuyTokens',
};
</script>

<style scoped>
.buy-token-title {
  color: #f1cf69;
  margin-top: 5px;
  margin-bottom: 5px;
}
.buy-token-wrapper {
  padding: 5px;
}
.transaction-area {
  border-style: solid;
  border-width: 1px;
  border-color: lightgrey;
  padding: 20px;
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
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.exchange-icon {
  text-align: center;
}
.exchange-tip {
  text-align: center;
  font-size: 6pt;
  margin: 0;
  color: orange;
}
</style>
