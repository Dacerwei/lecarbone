<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <h1 class="partners-title">{{ $t('message.Partners.title') }}</h1>
      </v-flex>
      <v-flex xs12 sm9>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 sm12 md6>
            <div class="img-container">
              <img class="partner" :src="CI"/>
            </div>
          </v-flex>
          <v-flex xs12 sm12 md6>
            <div class="img-container">
              <img class="partner" :src="Kadin"/>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CI from '@/assets/partner/partner_ci.png';
import Kadin from '@/assets/partner/partner_kadin_indonesia.png';

export default {
  name: 'PartnerSection',
  data() {
    return {
      CI,
      Kadin,
    };
  },
};
</script>

<style scoped>
.partners-title {
  text-align: center;
  color: #F1CF69;
}
.img-container {
  height: 80px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.partner {
  height: 100%;
  width: auto;
}
</style>

