<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <div>Your LeCarbone token
          <span>32</span>
          <span>LCT</span>
        </div>
        <div>Bonus from referrals
          <span>20.49</span>
          <span>LCT</span>
          <span>
            <v-btn outline color="green">
              GET MORE BONUS
            </v-btn>
          </span>
        </div>
        <div>
          Registrations
          <span>23</span>
          <span>People</span>
        </div>
        <p>
          If the total amount(Purchase and Bonuse) is less than 50 LCT(min. pledge).
          The Bonus will not be delivered to your ETH Address. Token distrubtion to
          contributors will take place one week after the end of Token Sale.
        </p>
        <p>Your ETH Address<span>3VFUDCBHDJVBJ2345675434535FJVSJDNXVN</span></p>
      </v-flex>
      <v-flex xs12 sm6>
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
