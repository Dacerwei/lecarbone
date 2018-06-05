<template>
  <div class="affiliate-container">
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <h1 class="affiliate-title">Affiliate Program</h1>
      </v-flex>
      <v-flex xs12 sm8>
        <p class="affiliate-text">
          Additional 0.5% bonus token you will get from all your
          friends that will use your referral link!
          Any user registered with this link will get 0.2 LeCarbone token as a welcome bonus.
        </p>
        <v-layout row wrap align-content-center>
          <v-flex xs12 sm3>
            <p class="referral-text">Your Referral Link:</p>
          </v-flex>
          <v-flex xs8 sm5>
            <input type="text" :value="referralLink" id="referral-link">
          </v-flex>
          <v-flex xs4 sm1>
            <div class="copy-btn" @click="copyLinkClicked"
              outline
              >
              COPY
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'AffiliateSection',
  props: {
    referralLink: {
      type: String,
      default: 'https://tokensale.lecarbone.com/r/34532',
    },
  },
  methods: {
    copyLinkClicked() {
      const link = document.querySelector('#referral-link');
      link.select();
      document.execCommand('copy');
    },
  },
};
</script>

<style scoped>
.affiliate-container {
  background-color:#eee;
  border-radius: 10px;
  padding: 30px 40px;
}
.affiliate-text {
  margin-bottom: 30px;
}
.affiliate-title {
  text-align: left;
  font-size: 27px;
  color: #A2A2A2;
  font-weight: 400;
}
.referral-text {
  margin-top: 6px;
}
#referral-link {
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: darkgray;
  text-align: center;
  border-radius: 5px;
  height: 32px;
}
.copy-btn {
  background: #69F193;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  padding: 7px 0;
  cursor: pointer;
  margin-left: 10px;
}
</style>

