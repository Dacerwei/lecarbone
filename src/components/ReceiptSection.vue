<template>
  <v-container class="receipt-section">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <v-layout class="receipt-line" row wrap>
          <v-flex xs12 sm5>
            <h2>Your LeCarbone token</h2>
          </v-flex>
          <v-flex class="amount-container" xs12 sm2>
            <span class="receipt-amount">32</span>
          </v-flex>
          <v-flex class="receipt-line-text" xs12 sm1>
            <span>LCT</span>
          </v-flex>
        </v-layout>
        <v-layout class="receipt-line" row wrap>
          <v-flex xs12 sm5>
            <h2>Bonus from referrals</h2>
          </v-flex>
          <v-flex class="amount-container" xs12 sm2>
            <span class="receipt-amount">20.49</span>
          </v-flex>
          <v-flex class="receipt-line-text" xs12 sm1>
            <span>LCT</span>
          </v-flex>
          <v-flex xs12 sm2>
            <div class="bonus-btn">
              GET MORE BONUS
            </div>
          </v-flex>
        </v-layout>
        <v-layout class="receipt-line" row wrap>
          <v-flex xs12 sm5>
            <h2>Registrations</h2>
          </v-flex>
          <v-flex class="amount-container" xs12 sm2>
            <span class="receipt-amount">23</span>
          </v-flex>
          <v-flex class="receipt-line-text" xs12 sm1>
            <span>People</span>
          </v-flex>
        </v-layout>
        <p class="receipt-text">
          If the total amount(Purchase and Bonuse) is less than 50 LCT(min. pledge).
          The Bonus will not be delivered to your ETH Address. Token distrubtion to
          contributors will take place one week after the end of Token Sale.
        </p>
        <h2 class="address-title">Your ETH Address</h2>
        <span class="address-content">3VFUDCBHDJVBJ2345675434535FJVSJDNXVN</span>
      </v-flex>
      <v-flex xs12 sm4 class="note">
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
.receipt-line h2 {
  margin: 5px 0;
}
.receipt-line-text {
  margin: 10px 0;
}
.bonus-btn {
  background: #69F193;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  font-size: 10px;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;
  margin: 10px 0;
}
.amount-container {
  margin: 5px 0;
}
.receipt-amount {
  padding: 5px 15px;
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;
  border-color: #69F193;
  font-size: 21px;
  color: #69F193;
  font-weight: 900;
  margin: 10px 0;
}
.receipt-text {
  padding-right: 25%;
  margin-top: 50px;
}

.address-title, .address-content {
  color: #F1CF69;
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
