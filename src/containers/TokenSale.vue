<template>
<div id="token-sale">
  <v-container>
    <div class="token-sale-section" id="token-sale">
      <v-layout row wrap>
        <v-flex xs12 md7>
            <h1 class="token-sale-title">{{ $t('message.TokenSale.title') }}</h1>
            <div class="token-sale-row">
              <v-layout row wrap>
                <v-flex xs12 sm3>
                  <h2>{{ $t('message.TokenSale.min_pledge') }}</h2>
                </v-flex>
                <v-flex xs12 sm2>
                  <span>200 LCT</span>
                </v-flex>
                <v-flex xs12 sm5>
                  <span class="token-list-content">
                    ({{ $t('message.TokenSale.min_pledge_tip') }})
                  </span>
                </v-flex>
              </v-layout>
            </div>
            <div class="token-sale-row">
              <v-layout row wrap>
                <v-flex xs12 sm3>
                  <h2>{{ $t('message.TokenSale.initial_price') }}</h2>
                </v-flex>
                <v-flex xs12 sm2>
                  <span>29,387,423 LCT</span>
                </v-flex>
              </v-layout>
            </div>
            <div class="token-sale-row">
              <v-layout row wrap>
                <v-flex xs12 sm3>
                  <h2>{{ $t('message.TokenSale.tokens_sold') }}</h2>
                </v-flex>
                <v-flex xs12 sm2>
                  <span>29,387,423 LCT</span>
                </v-flex>
              </v-layout>
            </div>
            <div class="token-sale-row">
              <v-layout row wrap>
                <v-flex xs12 sm3>
                  <h2>{{ $t('message.TokenSale.available') }}</h2>
                </v-flex>
                <v-flex xs12 sm2>
                  <span>320,398 LCT</span>
                </v-flex>
              </v-layout>
            </div>
        </v-flex>
        <v-flex xs12 sm5>
            <h1 class="timer-title">{{ $t('message.TokenSale.count_down_title') }}</h1>
            <count-down-timer :end-date="'20190628 1200'"></count-down-timer>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap justify-space-between>
      <v-flex xs12 md6>
        <buy-tokens></buy-tokens>
      </v-flex>
      <v-flex xs12 md5>
        <h1 class="video-title">{{ $t('message.VideoTutorial.title') }}</h1>
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
          <p>{{ $t('message.VideoTutorial.text_content') }}</p>
          <p v-html="$t('message.VideoTutorial.limitation')"></p>
        </div>
      </v-flex>
    </v-layout>
    <transaction-section></transaction-section>
    <affiliate-section></affiliate-section>
    <receipt-section></receipt-section>
    <questions-section></questions-section>
  </v-container>
</div>
</template>

<script>
import BuyTokens from '@/components/tokensale/BuyTokens';
import QuestionsSection from '@/components/tokensale/QuestionsSection';
import AffiliateSection from '@/components/tokensale/AffiliateSection';
import CountDownTimer from '@/components/common/CountDownTimer';
import ReceiptSection from '@/components/tokensale/ReceiptSection';
import TransactionSection from '@/components/tokensale/TransactionSection';

export default {
  name: 'TokenSale',
  components: {
    BuyTokens,
    CountDownTimer,
    QuestionsSection,
    AffiliateSection,
    TransactionSection,
    ReceiptSection,
  },
};
</script>

<style scoped>
.token-sale-section {
  margin: 50px 0;
}
.token-sale-title {
  color: #f1cf69;
  margin-bottom: 20px;
  font-size: 32px;
}
.token-sale-row {
  margin: 8px 0;
}
.timer-title {
  font-size: 16pt;
  text-align: left;
  color: #f1cf69;
  line-height: 1.2em;
  font-weight: bold;
}
.token-sale-section h2 {
  font-size: 16px;
}
li {
  margin-bottom: 10px;
}
.token-list-content {
  font-size: 9px;
}
/* RWD for ifame  */
.video-container {
  position: relative;
  padding: 120px;
  height: 0;
  overflow: hidden;
}
.video-title {
  font-size: 18px;
  color: #f1cf69;
  margin-top: 10px;
  margin-bottom: 30px;
}
.video-content p {
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
