<template>
  <div :style="{'background-image': 'url(' + footer + ')' }" id="footer">
    <v-content>
      <v-layout row>
        <v-flex xs4>
            <img class="logo" :src="logo"/>
        </v-flex>
        <v-flex xs4>
            <p class="footer-info">
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
    </v-content>
    <v-content>
      <v-layout row dark>
        <v-flex xs12>
          <v-card dark>
            <v-card-text class="copyright">
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
import footer from '@/assets/background/footer.jpg';

export default {
  name: 'Footer',
  data() {
    return {
      logo: footerLogo,
      footer,
    };
  },
};
</script>
<style scoped>

#footer{
  margin-top: 50px;
  padding-top: 40px;
}

.logo {
  width: 100px;
  margin-left: 50%;
}

.footer-info {
  color: white;
}
</style>
