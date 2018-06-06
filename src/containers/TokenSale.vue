<template>
<v-app>
  <div>
    <nav-bar></nav-bar>
    <v-container>
      <v-layout row wrap class="token-sale-section">
        <v-flex class="token-sale-list" xs12 md7>
            <h1 class="token-sale-title">Token Sale: week 1</h1>
            <v-layout class="token-sale-row" row wrap>
              <v-flex xs12 sm3>
                <h2>Min.pledge</h2>
              </v-flex>
              <v-flex xs12 sm2>
                <span>200 LCT</span>
              </v-flex>
              <v-flex xs12 sm5 class="token-list-content">
                <span>(less amounts of tokens will not be delivered to your ETH address)</span>
              </v-flex>
            </v-layout>
            <v-layout class="token-sale-row" row wrap>
              <v-flex xs12 sm3>
                <h2>Tokens sold</h2>
              </v-flex>
              <v-flex xs12 sm2>
                <span>29,387,423 LCT</span>
              </v-flex>
            </v-layout>
            <v-layout class="token-sale-row" row wrap>
              <v-flex xs12 sm3>
                <h2>Tokens sold</h2>
              </v-flex>
              <v-flex xs12 sm2>
                <span>29,387,423 LCT</span>
              </v-flex>
            </v-layout>
            <v-layout class="token-sale-row" row wrap>
              <v-flex xs12 sm3>
                <h2>Available</h2>
              </v-flex>
              <v-flex xs12 sm2>
                <span>320,398 LCT</span>
              </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 md5>
          <v-flex xs12 md9>
            <count-down-timer :end-date="'20180628 1200'"></count-down-timer>
          </v-flex>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md6>
          <buy-tokens></buy-tokens>
        </v-flex>
        <v-flex xs12 md5>
          <h1 class="video-title">Watch video tutorials</h1>
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/j23HnORQXvs"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen>
            </iframe>
          </div>
          <div class="video-content">
            <p>
              Make sure you have set the sufficient gas
              limit and gas price, or your transaction
              can be returned by Ethereum Networks.
            </p>
            <p>
              Gas limit: 21000<br>
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
.token-sale-section {
  margin: 50px 0;
}
.token-sale-title {
  color: #F1CF69;
  margin-bottom: 20px;
  font-size: 32px;
}
.token-sale-row {
  margin: 8px 0;
}

.token-sale-section h2{
  font-size: 16px;
}
li {
  margin-bottom: 10px;
}
.token-list-content{
  font-size: 9px;
}
.video-container {
  position: relative;
  padding: 120px;
  height: 0;
  overflow: hidden;
}
.video-title {
  font-size: 18px;
  color: #F1CF69;
  margin-top: 10px;
  margin-bottom: 30px;
}
.video-content p{
  margin: 20px 0;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
