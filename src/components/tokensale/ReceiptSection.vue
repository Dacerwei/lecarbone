<template>
  <v-container class="receipt-section">
    <v-layout row wrap>
      <v-flex sm12 md8>
        <div class="receipt-line">
          <v-layout row wrap>
            <v-flex xs12 sm5>
              <h2>{{ $t('message.ReceiptSection.your_token') }}</h2>
            </v-flex>
            <v-flex xs4 sm2 class="text-xs-center">
              <span class="receipt-amount">32</span>
            </v-flex>
            <v-flex xs2 sm1 class="text-xs-center">
              <span>LCT</span>
            </v-flex>
          </v-layout>
        </div>
        <div class="receipt-line">
          <v-layout row wrap>
            <v-flex xs12 sm5>
              <h2>{{ $t('message.ReceiptSection.bonus_from_referrals') }}</h2>
            </v-flex>
            <v-flex xs4 sm2 class="text-xs-center">
              <span class="receipt-amount">20.49</span>
            </v-flex>
            <v-flex xs2 sm1 class="text-xs-center">
              <span>LCT</span>
            </v-flex>
            <v-flex xs4 sm2 class="text-xs-center">
              <div class="bonus-btn">
                {{ $t('message.ReceiptSection.more_bonus') }}
              </div>
            </v-flex>
          </v-layout>
        </div>
        <div class="receipt-line">
          <v-layout row wrap>
            <v-flex xs12 sm5>
              <h2>{{ $t('message.ReceiptSection.registrations') }}</h2>
            </v-flex>
            <v-flex xs4 sm2 class="text-xs-center">
              <span class="receipt-amount">23</span>
            </v-flex>
            <v-flex xs2 sm1 class="text-xs-center">
              <span>{{ $t('message.ReceiptSection.people_unit') }}</span>
            </v-flex>
          </v-layout>
        </div>
        <p class="receipt-text">{{ $t('message.ReceiptSection.text_content') }}</p>
        <h2 class="address-title">{{ $t('message.ReceiptSection.address') }}</h2>
        <span class="address-content">3VFUDCBHDJVBJ2345675434535FJVSJDNXVN</span>
      </v-flex>
      <v-flex sm12 md4 class="note">
        <h3>獎勵的Token</h3>
        <ol>
          <li>註冊時有推薦連結會送</li>
          <li>被推薦人購買時, 回饋</li>
        </ol>
        <h3>注意</h3>
        <p>獎勵的 token 將在銷售結束後一週發, 門檻為購買的加上獎勵的要超過指定門檻後才發</p>
        <h3>關閉後要做三件事</h3>
        <ol>
          <li>停止銷售</li>
          <li>發獎勵</li>
          <li>返回 token</li>
        </ol>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ReceiptSection',
};
</script>


<style scoped>
.receipt-section {
  margin: 80px 0 30px 0;
}
.receipt-line {
  margin-bottom: 35px;
}
.bonus-btn {
  background: #69f193;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  font-size: 10px;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;
}
.amount-container {
  margin: 5px 0;
}
.receipt-amount {
  padding: 5px 15px;
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;
  border-color: #69f193;
  font-size: 21px;
  color: #69f193;
  font-weight: 900;
  margin: 10px 0;
}
.receipt-text {
  padding-right: 25%;
  margin-top: 50px;
}

.address-title,
.address-content {
  color: #f1cf69;
}

.address-content {
  font-size: 10px;
}

.address-title {
  font-size: 16px;
}

.note p {
  margin: 5px 0 20px 0;
}

.note ol {
  padding-left: 50px;
}

.note li {
  margin: 10px 0;
}
</style>
