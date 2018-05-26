<template>
  <div :style="{'background-image': 'url(' + footer + ')' }" id="footer">
    <v-content>
      <v-layout row wrap>
        <v-flex xs12 md4>
            <img class="logo" :src="logo"/>
        </v-flex>
        <v-flex xs12 md4>
            <p class="footer-info">
              Asia Assets Developments Co., Ltd.(AAD) is a corporate that dedicates
               itself to establishing green economies and developing assets.
               From our belief in making Earth a better place for our future generations,
               LeCarbone was born.
            </p>
        </v-flex>
        <v-flex xs12 md4>
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
            <div class="copyright">
              &copy; 2018 Asia Asstes Developments Co., Ltd
            </div>
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

#footer {
  margin-top: 50px;
  padding-top: 40px;
}

.logo {
  width: 100px;
  margin-left: 50%;
}

.footer-info {
  color: white;
  padding: 20px;
}

.copyright {
  text-align: right;
  background-color: #111111;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10%;
}
</style>
