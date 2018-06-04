<template>
<v-app>
  <div>
    <nav-bar></nav-bar>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <h1>Token Sale: week 1</h1>
          <p>
            Min.pledge
            <span>200 LCT (less amounts of tokens will not be delivered to your ETH address)</span>
          </p>
          <p>Initial price
            <span>1 LCT = 10 USD</span>
          </p>
          <p>
            Tokens sold
            <span>29,387,423 LCT</span>
          </p>
          <p>
            Available
            <span>320,398 LCT</span>
          </p>
        </v-flex>
        <v-flex xs12 md6>
          <count-down-timer :end-date="'20180628 1200'"></count-down-timer>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <div class="buy-token-wrapper">
            <h1 class="buy-token-title">Buy Tokens</h1>
            <p>
              Fund your account in order to confirm purchase.
              The number of Lecarbone token will be automatically
              calculated when we recieve your deposit.
            </p>
            <div>
              <p>Please enter the amount of Lecarbone token you want to buy:</p>
              <v-layout row wrap>
                <v-flex xs12 md8>
                  <input /><span>equal to</span><span><input /></span>
                </v-flex>
                <v-flex xs12 md4>
                  <p>Rate 1 ETH: 500.32 USD</p>
                  <p>(the rate will update at anytime)</p>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-btn outline color="white">BUY NOW</v-btn>
              </v-layout>
              <p>
                each transaction will be precessed accordingly
              </p>
              <p>
                Transactions will be automatically added to
                your balace when they are confirmed by the network.
                It may take up to few hours. Please be patient.
              </p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md6>
          <h1>Watch video tutorials</h1>
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZIY5tuU7RWg"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen>
            </iframe>
          </div>
          <div>
            <p>
              Make sure you have set the sufficient gas
              limit and gas price, or your transaction
              can be returned by Ethereum Networks.
            </p>
            <p>
              Gas limit: 21000
            </p>
            <p>
              Max gas price: 50 GWei
            </p>
          </div>
        </v-flex>
      </v-layout>
      <transaction-section></transaction-section>
      <affiliate-section></affiliate-section>
      <receipt-section></receipt-section>
      <questions-section></questions-section>
    </v-container>
    <Footer></Footer>
  </div>
</v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import QuestionsSection from '@/components/QuestionsSection';
import AffiliateSection from '@/components/AffiliateSection';
import CountDownTimer from '@/components/CountDownTimer';
import ReceiptSection from '@/components/ReceiptSection';
import TransactionSection from '@/components/TransactionSection';

export default {
  name: 'TokenSale',
  components: {
    NavBar,
    CountDownTimer,
    QuestionsSection,
    AffiliateSection,
    TransactionSection,
    ReceiptSection,
    Footer,
  },
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

/* RWD for ifame  */
.video-container {
  position:relative;
  padding-bottom:54%;
  height:0;overflow:hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
</style>
