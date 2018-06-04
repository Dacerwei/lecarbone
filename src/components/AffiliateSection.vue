<template>
  <div class="affiliate-container">
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <h1 class="affiliate-title">Affiliate Program</h1>
      </v-flex>
      <v-flex xs12 sm8>
        <p>
          Additional 0.5% bonus token you will get from all your
          friends that will use your referral link!
          Any user registered with this link will get 0.2 LeCarbone token as a welcome bonus.
        </p>
        <v-layout row wrap align-content-center>
          <v-flex xs12 sm3>
            <p>Your Referral Link:</p>
          </v-flex>
          <v-flex xs8 sm6>
            <input type="text" :value="referralLink" id="referral-link">
          </v-flex>
          <v-flex xs4 sm3>
            <v-btn @click="copyLinkClicked"
              outline
              color="green">
              COPY
            </v-btn>
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
  background-color:#FBFBFB;
  border-radius: 10px;
  padding: 20px;
}

.affiliate-title {
  text-align: center;
  font-size: 18pt;
  color: #A2A2A2;
}

#referral-link {
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: darkgray;
  text-align: center;
  border-radius: 5px;
  margin: 6px;
  height: 36px;
}
</style>

