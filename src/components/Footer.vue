<template>
  <div :style="{'background-image': 'url(' + background + ')' }">
    <v-content>
      <v-layout row>
        <v-flex xs4>
            <img :src="logo" style="width: 40%"/>
        </v-flex>
        <v-flex xs4>
            <p>
              Asia Assets Developments Co., Ltd.(AAD) is a corporate that dedicates
               itself to establishing green economies and developing assets.
               From our belief in making Earth a better place for our future generations,
               LeCarbone was born.
            </p>
        </v-flex>
        <v-flex xs4>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-telegram-plane"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-medium-m"></i>
        </v-flex>
      </v-layout>
      <v-layout row dark>
        <v-flex xs12>
          <v-card dark>
            <v-card-text>
              &copy; 2018 Asia Asstes Developments Co., Ltd
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>
<script>
import footerLogo from '@/assets/footer_aad.png';
import background from '@/assets/footer_background.jpg';

export default {
  name: 'Footer',
  data() {
    return {
      logo: footerLogo,
      background,
    };
  },
};
</script>
