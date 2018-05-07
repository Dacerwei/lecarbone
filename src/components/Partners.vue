<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <h1>Partners</h1>
      </v-flex>
      <v-flex xs12 sm8>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <img class="partner" :src="CI"/>
          </v-flex>
          <v-flex xs12 sm6>
            <img class="partner" :src="Kadin"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CI from '@/assets/partner_ci.png';
import Kadin from '@/assets/partner_kadin_indonesia.png';

export default {
  name: 'Partners',
  data() {
    return {
      CI,
      Kadin,
    };
  },
};
</script>

<style>
.partner {
  width: 100%;
}
</style>
