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
               LeCarbone was born.<br><br><span>service@lecarbone.com</span>
            </p>
        </v-flex>
        <v-flex xs12 md2>
        </v-flex>
        <v-flex xs12 md2>
          <v-btn icon small><i color="white" class="fab fa-facebook-square"></i></v-btn>
          <v-btn icon small><i color="white" class="fab fa-telegram-plane"></i></v-btn>
          <v-btn icon small><i color="white" class="fab fa-twitter"></i></v-btn>
          <v-btn icon small><i color="white" class="fab fa-medium-m"></i></v-btn>
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
  padding-top: 50px;
  background-position: 0 -350px;
}

.logo {
  width: 100px;
  margin-left: 50%;
}

.footer-info {
  color: #EEEEEE;
  margin-bottom: 50px;
  width: 90%;
  font-size: 12px;
}

.copyright {
  text-align: right;
  background-color: #111111;
  color: #EEEEEE;
  font-size: 12px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
}

span {
  font-weight: 900;
}

.fab {
  margin: 0;
}

</style>
