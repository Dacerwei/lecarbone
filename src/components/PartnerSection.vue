<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <h1 class="partners-title">Partners</h1>
      </v-flex>
      <v-flex xs12 sm8>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 sm12 md6 class="partner-img-wrapper">
            <img class="partner" :src="CI"/>
          </v-flex>
          <v-flex xs12 sm12 md6 class="partner-img-wrapper">
            <img class="partner" :src="Kadin"/>
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
  color: #ECCF78;
}
.partner-img-wrapper {
  height: 80px;
  text-align: center;
}
.partner {
  height: 100%;
  width: auto;
}
</style>

