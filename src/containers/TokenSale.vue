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
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md7>
          <buy-tokens></buy-tokens>
        </v-flex>
        <v-flex xs12 md5>
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
import BuyTokens from '@/components/BuyTokens';
import QuestionsSection from '@/components/QuestionsSection';
import AffiliateSection from '@/components/AffiliateSection';
import CountDownTimer from '@/components/CountDownTimer';
import ReceiptSection from '@/components/ReceiptSection';
import TransactionSection from '@/components/TransactionSection';

export default {
  name: 'TokenSale',
  components: {
    NavBar,
    BuyTokens,
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
